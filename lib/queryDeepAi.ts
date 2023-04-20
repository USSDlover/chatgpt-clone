import deepAi from './deepai';

export type Models = 'colorizer'
    | 'text2img'
    | 'text-generator'
    | 'torch-srgan'
    | 'waifu2x'
    | 'nsfw-detector'
    | 'toonify'
    | 'image-similarity'
    | 'deepdream'
    | 'summarization'
    | 'sentiment-analysis'
    | 'text-tagging';

export interface ModelInputs { text: '', image?: '', image2?: '', image1?: '' }

export interface ModelOutputs {
    'torch-srgan': {id: string, output_url: string};
    [key: string]: any;
}


const query = async (model: Models, body: ModelInputs): Promise<any> => {
    console.log('Request body', body);

    const res = await deepAi.callStandardApi('text2img', { text: 'something' })
        .catch((e: any) => {
            console.log(`Got error on call standard API`);
            console.log(e);
            console.log(`END OF ERROR`);
        });

    /*const res = await fetch('https://api.deepai.org/api/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '256400a4-fb65-4a31-af94-3c57c52da608',
            'client-library': 'deepai-js-client'
        },
        body: JSON.stringify(body)
    }).catch((error) => {
        console.log('Error on API call', error);
    });*/

    return res || '';
}

export default query;
