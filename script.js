// ======================================================
// TECH HELP — SITE ENGINE
// ======================================================


// ======================================================
// ELEMENTS
// ======================================================

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const categoryCards =
    document.querySelectorAll(".category-card");

const popularLinks =
    document.querySelectorAll("[data-article]");



// ======================================================
// SEARCH
// ======================================================

function searchArticles(query) {

    query =
        query
            .toLowerCase()
            .trim();


    if (!query) {

        searchResults.innerHTML = "";

        searchResults.classList.remove(
            "visible"
        );

        return;
    }


    const results = articles.filter(article => {

        const searchableText = [

            article.title,

            article.category,

            article.description,

            ...(article.keywords || [])

        ]
            .join(" ")
            .toLowerCase();


        return searchableText.includes(query);

    });


    displaySearchResults(results);
}



function displaySearchResults(results) {

    if (!searchResults) {
        return;
    }


    if (results.length === 0) {

        searchResults.innerHTML = `

            <div class="no-results">

                <strong>
                    No solutions found
                </strong>

                <span>
                    Try searching for something else.
                </span>

            </div>

        `;


        searchResults.classList.add(
            "visible"
        );


        return;
    }


    searchResults.innerHTML = results
        .map(article => `

            <button
                class="search-result"
                data-search-article="${article.id}"
                type="button"
            >

                <div>

                    <strong>
                        ${article.title}
                    </strong>

                    <span>
                        ${article.category}
                    </span>

                </div>


                <span class="result-arrow">
                    ›
                </span>

            </button>

        `)
        .join("");


    searchResults.classList.add(
        "visible"
    );


    const resultButtons =
        searchResults.querySelectorAll(
            "[data-search-article]"
        );


    resultButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const articleID =
                    button.dataset.searchArticle;


                searchResults.classList.remove(
                    "visible"
                );


                if (searchInput) {
                    searchInput.blur();
                }


                openArticle(articleID);

            }
        );

    });

}



// ======================================================
// SEARCH EVENTS
// ======================================================

if (searchInput) {

    const handleSearch = () => {

        searchArticles(
            searchInput.value
        );

    };


    searchInput.addEventListener(
        "input",
        handleSearch
    );


    searchInput.addEventListener(
        "keyup",
        handleSearch
    );


    searchInput.addEventListener(
        "search",
        handleSearch
    );

}



// Hide search results when clicking elsewhere

document.addEventListener(
    "click",
    event => {

        if (
            searchResults &&
            searchInput &&
            !event.target.closest(
                ".search-wrapper"
            )
        ) {

            searchResults.classList.remove(
                "visible"
            );

        }

    }
);



// ======================================================
// ARTICLE VIEW
// ======================================================

function openArticle(
    articleID,
    updateHistory = true
) {

    const article =
        articles.find(
            item =>
                item.id === articleID
        );


    if (!article) {
        return;
    }


    removeArticleOverlay();


    const stepsHTML =
        article.steps
            .map(
                (step, index) => `

                    <div class="article-step">

                        <div class="step-number">

                            ${index + 1}

                        </div>


                        <div class="step-content">

                            <h3>
                                ${step.title}
                            </h3>

                            <p>
                                ${step.text}
                            </p>

                        </div>

                    </div>

                `
            )
            .join("");


    document.body.insertAdjacentHTML(
        "beforeend",
        `

        <div
            class="article-overlay"
            id="articleOverlay"
        >

            <div class="article-page">


                <div class="article-nav">

                    <button
                        type="button"
                        class="back-button"
                        id="articleBackButton"
                    >

                        ← Back

                    </button>

                </div>



                <article>


                    <p class="article-category">

                        ${article.category}

                    </p>


                    <h1>

                        ${article.title}

                    </h1>


                    <p class="article-description">

                        ${article.description}

                    </p>


                    <div class="article-divider"></div>


                    <h2>
                        Try these steps in order
                    </h2>


                    <div class="article-steps">

                        ${stepsHTML}

                    </div>



                    <div class="article-help">


                        <div class="article-help-icon">

                            ?

                        </div>


                        <h2>
                            Still not working?
                        </h2>


                        <p>

                            Submit a help request and let IT know
                            which steps you've already tried.

                        </p>


                        <a
                            href="#"
                            class="primary-button"
                        >

                            Submit a Help Request

                        </a>


                    </div>


                </article>


            </div>

        </div>

        `
    );


    document.body.classList.add(
        "article-open"
    );


    const backButton =
        document.getElementById(
            "articleBackButton"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            closeArticle
        );

    }


    if (updateHistory) {

        window.history.pushState(
            {
                type: "article",
                article: articleID
            },
            "",
            `#${articleID}`
        );

    }

}



function removeArticleOverlay() {

    const overlay =
        document.getElementById(
            "articleOverlay"
        );


    if (overlay) {
        overlay.remove();
    }

}



function closeArticle() {

    removeArticleOverlay();


    document.body.classList.remove(
        "article-open"
    );


    if (window.location.hash) {

        history.pushState(
            {},
            "",
            window.location.pathname
        );

    }

}



// ======================================================
// CATEGORY BROWSER
// ======================================================

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const category =
                card.dataset.category;


            openCategory(category);

        }
    );

});



function openCategory(category) {

    removeCategoryOverlay();


    const matchingArticles =
        articles.filter(
            article =>
                article.category === category
        );


    let articleListHTML;


    if (matchingArticles.length > 0) {

        articleListHTML =
            matchingArticles
                .map(article => `

                    <button
                        type="button"
                        class="category-article"
                        data-category-article="${article.id}"
                    >

                        <div class="category-article-content">


                            <strong>

                                ${article.title}

                            </strong>


                            <span>

                                ${article.description}

                            </span>


                        </div>


                        <span class="category-article-arrow">

                            ›

                        </span>


                    </button>

                `)
                .join("");

    }

    else {

        articleListHTML = `

            <div class="empty-category">

                <div class="empty-category-icon">
                    +
                </div>

                <h2>
                    More help is coming
                </h2>

                <p>

                    We haven't added troubleshooting
                    guides for this category yet.

                </p>

            </div>

        `;

    }



    document.body.insertAdjacentHTML(
        "beforeend",
        `

        <div
            class="category-overlay"
            id="categoryOverlay"
        >

            <div class="category-page">


                <div class="category-nav">

                    <button
                        type="button"
                        class="back-button"
                        id="categoryBackButton"
                    >

                        ← Back

                    </button>

                </div>



                <main class="category-content">


                    <p class="article-category">
                        TECH HELP
                    </p>


                    <h1>
                        ${category}
                    </h1>


                    <p class="category-description">

                        Choose the problem that best matches
                        what you're experiencing.

                    </p>


                    <div class="category-solutions">

                        ${articleListHTML}

                    </div>


                </main>


            </div>

        </div>

        `
    );


    document.body.classList.add(
        "article-open"
    );



    const categoryBackButton =
        document.getElementById(
            "categoryBackButton"
        );


    if (categoryBackButton) {

        categoryBackButton.addEventListener(
            "click",
            closeCategory
        );

    }



    const articleButtons =
        document.querySelectorAll(
            "[data-category-article]"
        );


    articleButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const articleID =
                    button.dataset.categoryArticle;


                openArticleFromCategory(
                    articleID
                );

            }
        );

    });

}



function removeCategoryOverlay() {

    const overlay =
        document.getElementById(
            "categoryOverlay"
        );


    if (overlay) {
        overlay.remove();
    }

}



function closeCategory() {

    removeCategoryOverlay();


    document.body.classList.remove(
        "article-open"
    );

}



// ======================================================
// CATEGORY → ARTICLE
// ======================================================

function openArticleFromCategory(
    articleID
) {

    /*
       IMPORTANT:

       Open the article FIRST.

       The article overlay has a higher z-index
       than the category overlay, so it appears
       directly over the category page.

       Only after the article exists do we remove
       the category page underneath it.

       This prevents the homepage from flashing
       between the two screens.
    */

    openArticle(articleID);


    removeCategoryOverlay();

}



// ======================================================
// POPULAR SOLUTION LINKS
// ======================================================

popularLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const articleID =
                link.dataset.article;


            openArticle(articleID);

        }
    );

});



// ======================================================
// BROWSER BACK BUTTON
// ======================================================

window.addEventListener(
    "popstate",
    () => {

        removeArticleOverlay();

        removeCategoryOverlay();


        document.body.classList.remove(
            "article-open"
        );


        const articleID =
            window.location.hash.replace(
                "#",
                ""
            );


        if (
            articleID &&
            articles.some(
                article =>
                    article.id === articleID
            )
        ) {

            openArticle(
                articleID,
                false
            );

        }

    }
);



// ======================================================
// DIRECT ARTICLE LINKS
// ======================================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const articleID =
            window.location.hash.replace(
                "#",
                ""
            );


        if (
            articleID &&
            articles.some(
                article =>
                    article.id === articleID
            )
        ) {

            openArticle(
                articleID,
                false
            );

        }

    }
);
