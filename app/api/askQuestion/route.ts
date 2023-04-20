// import query from '@/lib/queryChatGptApi';
import query from '@/lib/queryDeepAi';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const { prompt, chatId, model, session } = await req.json();

    console.log('Request prompt', prompt);

    if(!prompt) {
        NextResponse.json({ answer: 'Please provide a prompt!', status: 400 });
        return;
    }

    if (!chatId) {
        NextResponse.json({ answer: 'Please provide a valid chat ID!', status: 400 });
        return;
    }

    // ChatGPT Query
    // const response = await query(prompt, chatId, model);

    // Deep AI Query
    const response = await query(model, { text: prompt });

    console.log('API Response :O', response);

    if (response.status !== 200) {
        NextResponse.json({ answer: response, status: response.status, fullRes: response });
        return;
    }

    const message: Message = {
        text: response?.text || `ChatGPT was unable to find an answer for chat`,
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png',
        },
    };

    // this is version 8 usage
    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);

    NextResponse.json({ answer: message.text });
}
