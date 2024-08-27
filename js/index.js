const form = document.querySelector("#ia-chat")

form.addEventListener("submit",(event)=>{
    event.preventDefault()

    text = document.querySelector("#respo-text").value
    alert(text)

    /*
    * Install the Generative AI SDK
    *
    * $ npm install @google/generative-ai
    */

    const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    } = require("@google/generative-ai");
    
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });
    
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };
    
    async function run() {
        const parts = [
        {text: "input: crie para min um RPG espacial"},
        {text: "output: Você está em uma nave espacial, quando de repente houve um barulho no espaço.\no que você faz?\n\n1. olha pela janela\n2. tranca as portas\n3. se esconde"},
        {text: "input: crie um rpg de sobrevivência"},
        {text: "output: Você está em uma floresta nevada, onde o perigo está presente o tempo inteiro. Você começa a sentir fome.\nO que você faz?\n\n1. procura comida na floresta\n2. procura comida no rio\n3. procura uma caverna"},
        {text: "input: "},
        {text: "output: "},
        ];
    
        const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
        });
        console.log(result.response.text());
    }
    
    run();
})