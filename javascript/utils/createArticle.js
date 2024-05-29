import createInput from "./createInput.js";

function createArticle(articleName){
    // une fonction c'est une bloc de code qui permet d'encapsuler une partie de la logique de résolution d'un problème
    const article = document.createElement("article"); 
    article.id = "article-"+articleName
    createInput(article, articleName)
    return article
    

}

export default createArticle