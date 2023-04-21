import deepai from 'deepai'

deepai.setApiKey(process.env.DEEPAI_API_KEY || '');

/**
 * await deepAi.callStandardApi('text2img', { text: 'something' });
 */
export default deepai;
