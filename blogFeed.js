var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    buildFeed(JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wildlifeconservationsociety&api_key=i0w6bucsgxu3jc7nchdjoash1htquwx1slocid7r&count=20");
xhttp.send();

function buildFeed(feed) {

    items = feed.items;

    for (key in items) {

        item = items[key];

        description = item.description.substring(item.description.indexOf('<p>') + 3, item.description.indexOf('</p>'));

        document.getElementById('blog-feed').innerHTML = document.getElementById('blog-feed').innerHTML + `
        <div class='item' id='item-${key}'>
        <a href='./blog-item.html?id=${key}')>
            <div class='row'>
                <div class='col-lg-8'>
                    <h2 class='title'>${item.title}</h2>
                    <h5 class='pub-date'>${item.pubDate}</h5>
                    <p class='description'>${description}</p>
                </div>
                <div class='col-lg-4'>
                    <img class='thumbnail' src='${item.thumbnail}'>
                </div>
            </div>
        </a>
        </div>
        `;
    }
}