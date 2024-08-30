export class dialogo {
    constructor() {
        this.numchat = 0
    }

    gerartexto(nome, texto, user) {
        console.log(nome)
        console.log(texto)
        console.log(user)
        this.numchat++
        let idchat = document.getElementById('chat')
        //criando a div container
        const gcontainer = document.createElement('div')
        gcontainer.setAttribute('id','gc'+this.numchat)
        gcontainer.setAttribute('class','gcontainer')
        idchat.appendChild(gcontainer)

        const textos = (nome, texto, user)=>{
            console.log(nome+" ixi")
            console.log(texto+" ixi")
            console.log(user+" ixi")
            //criando a div dos textos
            const userDiv = document.createElement('div')
            let divID = 'chatby'+nome+'n'+this.numchat
            console.log(divID+" ixi")
            userDiv.setAttribute('id', divID)
            userDiv.setAttribute('class', 'textochat')
            console.log(userDiv +" ixi")
            if (user == false) {
                userDiv.classList.add('iachat')
            }
            document.getElementById('gc'+this.numchat).appendChild(userDiv)
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
        }

        const userIcon = (nome, user)=>{
            //criar i
            const userIcon = document.createElement('i')
            userIcon.setAttribute('id','icon'+this.numchat)
            let userImg = ""
            let altImg = ""
            if(user == true) {
                userImg = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                altImg = "Imagem de foto de perfil do usuário"
            } else {
                userIcon.classList.add('iaicon')
                userImg = "https://thumb.ac-illust.com/41/4137d1a06f24fba4ad746d7672551894_t.jpeg"
                altImg = "Imagem da logo da IA"
            }
            document.getElementById('gc'+this.numchat).appendChild(userIcon)

            console.log(userImg)
            //criar img
            const imgi = document.createElement('img')
            imgi.setAttribute('class', 'icon')
            imgi.setAttribute('src', userImg)
            imgi.setAttribute('alt', altImg)
            document.getElementById('icon'+this.numchat).appendChild(imgi)

            const iUserName = document.createElement('h1')
            iUserName.innerHTML = nome
            document.getElementById('icon'+this.numchat).appendChild(iUserName)
        }

        if (user == true) {
            textos(nome, texto, user)
            userIcon(nome, user)
        } else {
            userIcon(nome, user)
            textos(nome, texto, user)
        }
        return 'chatby'+nome+'n'+this.numchat
    }
}