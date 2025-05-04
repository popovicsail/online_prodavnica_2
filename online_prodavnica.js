class Article {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }
}

let articles = []

function InitializeArticles () {
    articles = [
        new Article("Monitor", 165, "MonitorDescription"),
        new Article("Tv", 650, "TvDescription"),
        new Article("Mis", 20, "MisDescription")
    ]

    InitializeArticlesTable(articles)
}

function InitializeArticlesTable (articles) {
    let table = document.querySelector("#tabela")
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

        table.appendChild(tr)
    }
}

InitializeArticles()