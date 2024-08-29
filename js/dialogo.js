export class dialogo {
    constructor() {
        this.numchat = 0
    }

    gerartexto(nome, texto) {
        this.numchat++
        //criando a div
        const userDiv = document.createElement('div')
        let divID = 'chatby'+nome+'n'+this.numchat
        userDiv.setAttribute('id', divID)
        userDiv.setAttribute('class', 'textochat')
        document.getElementById('chat').appendChild(userDiv)
        // criando h1
        const userMSGContainer = document.getElementById(divID)
        const chatUserName = document.createElement('h1')
        chatUserName.setAttribute('id', 'chatby'+nome+'namen'+this.numchat)
        chatUserName.innerHTML = nome
        userMSGContainer.appendChild(chatUserName)
        //criando texto
        const chatUserText = document.createElement('p')
        chatUserText.setAttribute('id', 'chatby'+nome+'textn'+this.numchat)
        chatUserText.innerHTML = texto
        userMSGContainer.appendChild(chatUserText)
        return divID
    }
}