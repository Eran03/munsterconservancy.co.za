const accessToken = 'i0w6bucsgxu3jc7nchdjoash1htquwx1slocid7r';
const numBlogsPerPage = 2;
let page = 1;

function fetchBlogs(page) {
    const url = 'https://api.medium.com/v1/users/wildlifeconservationsociety/posts?limit=${numBlogsPerPage}&page=${page}';
    const headers = {
        'Authorization': 'Bearer ${accessToken}',
        'Access-Control-Allow-Origin': 'https://eran03.github.io/'
};

fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
        const blogsDiv = document.getElementById('blogs');
        const paginationDiv = document.getElementById('pagination');

        data.data.forEach(blog => {
            console.log(blog);
        });

        // Create pagination buttons (Next, Previous) and attach event listeners
    })
    .catch(error => console.error('Error fetching blogs:', error));
}

fetchBlogs(page);

function showNextPage() {
    page++;
    fetchBlogs(page);
}

function showPreviousPage() {
    if (page > 1) {
        page--;
        fetchBlogs(page);
    }
}

const paginationDiv = document.getElementById('pagination');
paginationDiv.innerHTML = `
    <button onclick="showPreviousPage()">Previous</button>
    <button onclick="showNextPage()">Next</button>
`;