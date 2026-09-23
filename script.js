// ======================================================
// SEARCH
// ======================================================

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function searchArticles(query) {

    query = query.toLowerCase().trim();

    if (!query) {
        searchResults.innerHTML = "";
        searchResults.classList.remove("visible");
        return;
    }

    const results = articles.filter(article => {

        const searchableText = [
            article.title,
            article.category,
            article.description,
            ...article.keywords
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(query);
    });

    displaySearchResults(results);
}


function displaySearchResults(results) {

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <strong>No solutions found</strong>
                <span>Try searching for something else.</span>
            </div>
        `;

        searchResults.classList.add("visible");
        return;
    }

    searchResults.innerHTML = results.map(article => `
        <button
            class="search-result"
            onclick="openArticle('${article.id}')"
        >
            <div>
                <strong>${article.title}</strong>
                <span>${article.category}</span>
            </div>

            <span class="result-arrow">›</span>
        </button>
    `).join("");

    searchResults.classList.add("visible");
}


if (searchInput) {

    const handleSearch = () => {
        searchArticles(searchInput.value);
    };

    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("keyup", handleSearch);
    searchInput.addEventListener("search", handleSearch);

}


// ======================================================
// ARTICLE VIEW
// ======================================================

function openArticle(articleID) {

    const article = articles.find(item => item.id === articleID);

    if (!article) return;

    const stepsHTML = article.steps.map((step, index) => `
        <div class="article-step">

            <div class="step-number">
                ${index + 1}
            </div>

            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.text}</p>
            </div>

        </div>
    `).join("");


    document.body.insertAdjacentHTML("beforeend", `

        <div class="article-overlay" id="articleOverlay">

            <div class="article-page">

                <div class="article-nav">
                    <button onclick="closeArticle()" class="back-button">
                        ← Back
                    </button>
                </div>

                <article>

                    <p class="article-category">
                        ${article.category}
                    </p>

                    <h1>${article.title}</h1>

                    <p class="article-description">
                        ${article.description}
                    </p>

                    <div class="article-divider"></div>

                    <h2>Try these steps in order</h2>

                    <div class="article-steps">
                        ${stepsHTML}
                    </div>


                    <div class="article-help">

                        <div class="article-help-icon">?</div>

                        <h2>Still not working?</h2>

                        <p>
                            Submit a help request and let IT know
                            which steps you've already tried.
                        </p>

                        <a href="#" class="primary-button">
                            Submit a Help Request
                        </a>

                    </div>

                </article>

            </div>

        </div>

    `);

    document.body.classList.add("article-open");

    window.history.pushState(
        { article: articleID },
        "",
        `#${articleID}`
    );
}


function closeArticle() {

    const overlay = document.getElementById("articleOverlay");

    if (overlay) {
        overlay.remove();
    }

    document.body.classList.remove("article-open");

    if (window.location.hash) {
        history.pushState(
            "",
            document.title,
            window.location.pathname
        );
    }
}


// Handle browser back button

window.addEventListener("popstate", () => {

    const overlay = document.getElementById("articleOverlay");

    if (overlay) {
        overlay.remove();
        document.body.classList.remove("article-open");
    }

});


// Allow direct links to articles

window.addEventListener("DOMContentLoaded", () => {

    const articleID = window.location.hash.replace("#", "");

    if (
        articleID &&
        articles.some(article => article.id === articleID)
    ) {
        openArticle(articleID);
    }

});
