import openai from './chatgpt';

const query = async (prompt: string, model: string) => {
    return await openai.createCompletion({
        model,
        prompt,
        // The temperature and top_p actually used to move from 1 most logical to 0.1 most creative
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0
    })
        .then(res => res.data.choices[0].text)
        .catch((err) =>
            `ChatGPT was unable to find an answer for that! (Error: ${err.message}`
        );
};

export default query;
