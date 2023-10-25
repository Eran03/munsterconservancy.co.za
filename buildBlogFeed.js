var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    buildFeed(JSON.parse(xhttp.responseText));
};
xhttp.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40munsterconservancy");
xhttp.send();

function buildFeed(feed) {
    var items = feed.items
    console.log(items);
    for (key in items) {
        item = items[key];

        document.getElementById("blog-feed").innerHTML = document.getElementById("blog-feed").innerHTML + "<div id='item-" + key + "' </div>";

        document.getElementById("item-" + key).innerHTML = 
        "<h2 class='title'>" + item.title + "</h2>" + 
        "<h5 class='pub-date'>" + item.pubDate + "</h5>" +
        "<br>" + 
        "<p class='content'>" + item.content + "</p>" +
        "<p class='link'><a href='" + item.link + "' target='_blank'>" + item.link + "</a></p>" +
        "<br><hr><br>";
    }
}