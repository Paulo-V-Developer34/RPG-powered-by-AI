//AVISOS
//
//


//importações

import { dialogo } from './dialogo.js';
const usardialogo = new dialogo();
import showdown from 'showdown';
let converter = new showdown.Converter();
//notas
//
//

//importação da API_KEY
document.getElementById('ia-chat').addEventListener('submit', async function(event) {
    event.preventDefault();

    const texto = document.getElementById('respo-text').value;

    //criando texto
    usardialogo.gerartexto("Usuário", texto, true)

    //gerar a mensagem da ia no DOM
    function msgIA(mensagem, error) {
        if (error == true) {
            console.log("deu errado")
            document.getElementById(usardialogo.gerartexto("Cleyton", mensagem, false)).classList.add("txterror")
            // document.getElementById(usardialogo.gerartexto("IA", mensagem))
        }else{
            usardialogo.gerartexto("Cleyton", mensagem, false)
        }
    }

    let textojson = {
       "texto": texto
    };

    console.log(textojson + "esse é o texto em JSON")

    try{
        //enviando o form para o servidor
        var response = await fetch('http://localhost:3000/aiapi/chat', { //o "ai-chat" vai indicar o que será executado no index.js do node
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(textojson)
        });

        //verificando se a operação foi bem sucedida
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //pegando a resposta do servidor
        let result = await response.json();
        let mkhtml = converter.makeHtml(JSON.stringify(result.message))
        msgIA(mkhtml, false)
    } catch(error) {
        msgIA(error, true)
    }
});