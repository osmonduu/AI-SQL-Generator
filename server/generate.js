import openaiClient from "./api.js"

const generate = async (queryDescription) => {

    const daVinci = async (queryDescription) => {
        const response = await openaiClient.createCompletion({
            model: "text-davinci-003", 
            prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0 //ranges from 0-10 creativity. 0 should return the same response if sent the same prompt.
        })
        return response.data.choices[0].text
    }

    const chatGptApi = async (queryDescription) => {
        const messages = [
            { role: "system", content: `You are a translator form plain English to SQL.` },
            { role: "user", content: `Convert the following natural language description into a SQL query: \n\nshow all elements fromt he table users.` },
            { role: "asisstant", content: `SELECT * FROM users;` },
            { role: "user", content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.` }
        ];
        const response = await openaiClient.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
        })
        return response.data.choices[0].messages.content
    }

    return await chatGptApi(queryDescription)
}



export default generate