import openai from '@/lib/chatgpt';
import { NextResponse } from 'next/server';

export async function GET() {
    const models = await openai.listModels()
        .then((res) => res.data.data)
        .catch((e) => {
            console.log('Error on listing OpenAI Models', e);
            return [];
        });

    let modelOptions;
    if (models && Array.isArray(models)) {
        modelOptions = models.map((model) => ({
            value: model.id,
            label: model.id,
        }));


        return NextResponse.json({ modelOptions }, { status: 200 });
    }

    return NextResponse.json({ message: 'Error on list the models' }, { status: 400 });
}
