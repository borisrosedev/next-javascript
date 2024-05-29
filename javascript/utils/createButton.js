function createButton(buttonName, buttonType){
    const button = document.createElement("button")
    // un objet possède des propriétés accessibles par le . (la dot notation)
    // si vous souhaitez écrire des choses à l'intérieur du bouton vous utilisez la propriété textContent ou innerText
    button.textContent = buttonName
    //si vous voulez donner un type à votre bouton, vous utilisez la propriété type et vous lui assigner une valeur
    button.type = buttonType
    // c'est la seule façon de faire parvenir à l'extérieure de la fonction une information , le return
    return button 
}

export default createButton