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

const query = async (model: Models, body: ModelInputs): Promise<Response> => {
    const form = new FormData();
    form.append('text', body.text);
    return fetch(`https://api.deepai.org/api/${model}`, {
        method: 'POST',
        headers: {
            'api-key': process.env.DEEPAI_API_KEY || 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'
        },
        body: form,
        keepalive: true
    }).catch((error) => {
        console.log('Error on API call', error);
        return Response.error();
    });
}

export default query;
