//AVISOS
//
//

//notas
//
//

//importação da API_KEY
document.getElementById('ia-chat').addEventListener('submit', async function(event) {
    event.preventDefault();

    const texto = document.getElementById('respo-text').value;

    const text = {
        texto
    };

    alert("deu certo 1")

    const response = await fetch('http://localhost:3000/ai-chat', { //o "ai-chat" vai indicar o que será executado no index.js do node
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(text)
    });

    const result = await response.json();
    console.log(result);
});