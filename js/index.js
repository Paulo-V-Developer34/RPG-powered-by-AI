//AVISOS
//
//


//importações
// import dialogo from './criardialogo.js'; //importação inutilizada no momento

//notas
//
//

//variaveis
let numchat = 0

//importação da API_KEY
document.getElementById('ia-chat').addEventListener('submit', async function(event) {
    event.preventDefault();

    const texto = document.getElementById('respo-text').value;

    //criar elemento
    //criar div
    // document.getElementById('conversa')
        // .appendChild(document.createElement('div').setAttribute('id', 'chatUser1'))
    numchat += 1
    //criar div
    const userDiv = document.createElement('div')
    userDiv.setAttribute('id', 'chatUser'+numchat)
    userDiv.setAttribute('class', 'textochat')
    document.getElementById('conversa').appendChild(userDiv)
    // userDiv.innerHTML = `<p>${texto}<p>`
    const userMSGContainer = document.getElementById('chatUser'+numchat)
    const chatUserName = document.createElement('h1')
    chatUserName.setAttribute('id', 'chatUserName'+numchat)
    chatUserName.innerHTML = "Usuário"
    userMSGContainer.appendChild(chatUserName)
    //criar texto
    const chatUserText = document.createElement('p')
    chatUserText.setAttribute('id', 'chatUserText'+numchat)
    chatUserText.innerHTML = texto
    userMSGContainer.appendChild(chatUserText)

    

    //criar h1
    

    chatContainer.appendChild(document.createElement('h1').setAttribute('id', 'chatutext1'))
    

    // userText.innerHTML = `<p>${texto}<p>`
    // numchat += 1
    // userText.id = numchat
    // userText.className = "textochat"
    // chat.appendChild(this.innerHTML = "<h1>Usuário<h1>")

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

function teste() {
    alert("o teste funcionou")
    fetch('http://localhost:3000/teste')
    .then(response => response.text()) // Converte a resposta para texto
    .then(data => {
        console.log(data); // Exibe a resposta no console
        // Você pode fazer outras coisas com 'data' aqui, como exibir na página
    })
    .catch(error => console.error('Erro:', error)); // Captura e exibe erros
}