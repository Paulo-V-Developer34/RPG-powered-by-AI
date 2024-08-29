//classe inutilizada por enquanto

export class dialogo {
    gerartexto(texto) {
        const userText = document.createElement('div')
        userText.innerHTML = `<p>${texto}<p>`
        document.getElementById('conversa').appendChild(userText)
    }
}