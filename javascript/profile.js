import createArticle from "./utils/createArticle.js"
import createButton from "./utils/createButton.js"

const sectionFormInputs = document.getElementById("form-inputs")

sectionFormInputs.appendChild(createArticle('email'))
sectionFormInputs.appendChild(createArticle('password'))

const sectionFormButtons = document.getElementById("form-buttons")

sectionFormButtons.appendChild(createButton('Valider', 'submit'))

sectionFormButtons.appendChild(createButton('Réinitialiser', 'reset'))

const form = document.getElementById("form")

form.addEventListener('submit', function (){
    
})
