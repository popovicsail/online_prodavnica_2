"use strict";

class Article {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }
}

let articles = []

function updateLocalStorage() {
    localStorage.setItem("articles", JSON.stringify(articles))
}

function initializeArticles() {
    let data = localStorage.getItem("articles")
    articles = data ? JSON.parse(data) : []
    initializeArticlesTable();
}


function initializeArticlesTable () {
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    for (let i = 0; i < articles.length; i++) {
        let tr = document.createElement("tr")

        let rb = document.createElement("td")
        let name = document.createElement("td")
        let price = document.createElement("td")
        let description = document.createElement("td")

        rb.textContent = i + 1
        name.textContent = articles[i].name
        price.textContent = articles[i].price
        description.textContent = articles[i].description

        tr.appendChild(rb)
        tr.appendChild(name)
        tr.appendChild(price)
        tr.appendChild(description)

        tr.addEventListener("click", function (){
            displayArticleDetails(articles[i])
        })

        tbody.appendChild(tr)
    }
}

function displayArticleDetails (article) {
    let table = document.querySelector("#detalji")
    let p = document.createElement("p")

    p.innerHTML = "name: " + article.name + "<br>" + "price: " + article.price + "<br>" + "description: " + article.description + "<br>"

    if (table.firstChild) {
        table.innerHTML = ""
    }

    table.appendChild(p)
}


function handleFormSubmission() {
    let submitBtn = document.querySelector("#submitBtn")
    submitBtn.addEventListener ("click", function (event) {
        event.preventDefault()
        let forma = document.querySelector('#forma')
        let formData = new FormData(forma)

        let name = formData.get("naziv")
        let price = formData.get("cena")
        let description = formData.get("opis")

        let noviArtikal = new Article(name, price, description)
        articles.push(noviArtikal)

        updateLocalStorage()
        initializeArticles()
        
    })
}

document.addEventListener('DOMContentLoaded', initializeArticles)
document.addEventListener('DOMContentLoaded', handleFormSubmission)