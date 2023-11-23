function addArticle() {
    // Get input values
    const title = document.getElementById("articleTitle").value;
    const image = document.getElementById("articleImage").value;
    const content = document.getElementById("articleContent").value;
    const author = document.getElementById("authorName").value;
    const link = document.getElementById("articleLink").value;

    // Create a new article element
    const newArticle = document.createElement("article");
    newArticle.className = "post";
    newArticle.innerHTML = `
        <img src="${image}" alt="Article Image">
        <h2><a href="${link}" target="_blank">${title}</a></h2>
        <p>${content}</p>
        <p class="publisher">Published by: ${author}</p>
        <p class="post-date">Published on: ${getCurrentDate()}</p>
    `;

    // Append the new article to the section
    document.querySelector("section").appendChild(newArticle);

    // Clear the form inputs
    document.getElementById("articleTitle").value = "";
    document.getElementById("articleImage").value = "";
    document.getElementById("articleContent").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("articleLink").value = "";
}

function getCurrentDate() {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return now.toLocaleDateString("en-US", options);
}

function updateArticleTitleLink() {
    const articleLinkInput = document.getElementById('articleLink');
    const articleTitleInput = document.getElementById('articleTitle');

    if (articleLinkInput.value.trim() !== '') {
        // If a link is provided, make the article title a hyperlink
        articleTitleInput.innerHTML = `<a href="${articleLinkInput.value}" target="_blank">${articleTitleInput.value}</a>`;
    } else {
        // If no link is provided, reset the article title
        articleTitleInput.innerHTML = articleTitleInput.value;
    }

    // Add an event listener to the article title to open the link when clicked
    articleTitleInput.addEventListener('click', function () {
        // Check if the articleTitleInput is a link (contains an <a> tag)
        if (articleTitleInput.querySelector('a')) {
            // Extract the link from the <a> tag and open it in a new tab
            const link = articleTitleInput.querySelector('a').getAttribute('href');
            window.open(link, '_blank');
        }
    });
}