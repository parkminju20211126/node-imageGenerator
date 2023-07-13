const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const generateImage = async (req, res) => {
    res.status(200).json({
        success:true,
    })
}
module.exports = {generateImage};