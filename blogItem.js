const urlParams = new URLSearchParams(window.location.search);
const itemID = urlParams.get('id');

var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    buildItem(JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wildlifeconservationsociety&api_key=i0w6bucsgxu3jc7nchdjoash1htquwx1slocid7r&count=20");
xhttp.send();

function buildItem(feed) {

    item = feed.items[itemID];

    document.getElementById('blog-item').innerHTML = `
    <h2 class='title'>${item.title}</h2>
    <h5 class='pub-date'>${item.pubDate}</h5>
    <p class='description'>${item.content}</p>
    <a class='link' href='${item.link}'>${item.link}</a> 
    <br><br>
    `;
    document.getElementById('blog-return').innerHTML = `<a href='./blog-feed.html#item-${itemID}'>RETURN</a>`;
}