const articles = document.querySelector('.articles');

function getResult(){
    fetch('https://helen17.github.io/test-page/db.json')
    .then((res) => res.json())
    .then((data) => {

        for(let i = 0; i<data.length; i++){

            const article = document.createElement('div');
            article.className = "article";
            articles.appendChild(article);
            
            const img = document.createElement('img');
            img.className = "main-image";
            article.appendChild(img);

            const DateTitleDiv = document.createElement('div');
            DateTitleDiv.className = "date-title";
            article.appendChild(DateTitleDiv);

            const date = document.createElement('p');
            date.className = "date";
            DateTitleDiv.appendChild(date);

            const title = document.createElement('h2');
            title.className = "title";
            DateTitleDiv.appendChild(title);

            const description = document.createElement('p');
            description.className = "description";
            article.appendChild(description);

            const video = document.createElement('img');
            video.className = "video";
            article.appendChild(video);

            img.src = 'img/' + data[i].img;
            title.innerHTML = data[i].title;
            date.innerHTML = data[i].date.toUpperCase();
            description.innerHTML = data[i].description;
            video.src = 'video/' + data[i].img;
        }
    })
}

getResult();