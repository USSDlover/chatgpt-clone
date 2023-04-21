import query from '@/lib/queryDeepAi';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';

type DeepAPIResponse = {
    id: string;
    output_url: string;
}

export async function POST(req: NextRequest) {
    const { prompt, chatId, model, session } = await req.json();

    console.log('Request prompt for Text 2 IMG', prompt);

    if(!prompt) {
        return NextResponse.json({ answer: 'Please provide a prompt!', status: 400 });
    }

    if (!chatId) {
        return NextResponse.json({ answer: 'Please provide a valid chat ID!', status: 400 });
    }

    // Deep AI Query
    const response = await query(model, { text: prompt });

    if (response.status !== 200) {
        return NextResponse.json(
            { answer: 'Call Failed', status: response.status, fullRes: JSON.stringify(response) },
            { status: response.status }
        );
    }

    const deepAiResponse: DeepAPIResponse = await response.json();

    const message: Message = {
        text: `DeepAI has generated this image`,
        deepAi:{
            id: deepAiResponse.id || '',
            outputUrl: deepAiResponse.output_url || ''
        },
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'Deep AI',
            name: 'Deep AI',
            avatar: 'https://avatars.githubusercontent.com/u/29112101?v=4',
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

    return NextResponse.json({ message });
}
