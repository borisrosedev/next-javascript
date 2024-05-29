function createInput(article, inputName){
    const input = document.createElement('input')
    input.id = inputName
    input.placeholder ="Entrer votre "+ inputName
    input.type = inputName == "password" ? "password" : "text"
    input.addEventListener('input', (e) => {
        //window.alert(e.target.value)
    })
    article.appendChild(input)
}

export default createInput


