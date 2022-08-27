//querySelectors
let inputClass = document.querySelector(".inputClass");
let buttonClass = document.querySelector(".buttonClass");
let container = document.querySelector(".container");
let newsContainer = document.querySelector(".news-container");

newsContainer.classList.add("inactive");

buttonClass.addEventListener("click", function (event) {
  container.innerHTML = "";

  fetch(
    `https://newsapi.org/v2/everything?q=${inputClass.value}&from=2022-07-27&sortBy=publishedAt&apiKey=a678c91dfe4e48dcb6aa50005c20f263`
  )
    .then((result) => result.json())
    .then((data) => {
      let articles = data["articles"];
      // console.log(articles);

      for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        let result = `<div class="news flex">
              <div class="news-img">
                <img src=${article["urlToImage"]}>
              </div>
              <div class="news-info">
                <h1 class="title">${article["title"]} </h1>
                <p class="author">Author : ${article["author"]}</p>
                <p class="description"> ${article["description"]} <br>
                  <a href=${article["url"]}>Read more</a> 
                </p>
              </div>
            </div>`;

        container.innerHTML += result;
        newsContainer.classList.remove("inactive");
      }
    })
    .catch((err) => alert("Enter correct subject..."));
});