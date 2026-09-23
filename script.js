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

const popularSolutions =
    document.getElementById("popularSolutions");



// ======================================================
// NAVIGATION STATE
// ======================================================

let currentCategory = null;

let articleSource = null;



// ======================================================
// HELPERS
// ======================================================

function categoryToSlug(category) {

    return category
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

}



function getCategoryFromSlug(slug) {

    const categories =
        [
            ...new Set(
                articles.map(
                    article => article.category
                )
            )
        ];


    const categoryCardsList =
        [...categoryCards]
            .map(
                card =>
                    card.dataset.category
            );


    const allCategories =
        [
            ...new Set(
                [
                    ...categories,
                    ...categoryCardsList
                ]
            )
        ];


    return allCategories.find(
        category =>
            categoryToSlug(category) === slug
    );

}



function setBodyOverlayState() {

    const articleOpen =
        document.getElementById(
            "articleOverlay"
        );

    const categoryOpen =
        document.getElementById(
            "categoryOverlay"
        );


    if (articleOpen || categoryOpen) {

        document.body.classList.add(
            "article-open"
        );

    }

    else {

        document.body.classList.remove(
            "article-open"
        );

    }

}



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


    const results =
        articles.filter(article => {

            const searchableText = [

                article.title,

                article.category,

                article.description,

                ...(article.keywords || [])

            ]
                .join(" ")
                .toLowerCase();


            return searchableText.includes(
                query
            );

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


    searchResults.innerHTML =
        results
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


                currentCategory = null;


                openArticle(
                    articleID,
                    {
                        source: "search",
                        updateHistory: true
                    }
                );

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
// POPULAR SOLUTIONS
// ======================================================

function renderPopularSolutions() {

    if (!popularSolutions) {
        return;
    }


    const popularArticles =
        articles.filter(
            article =>
                article.popular === true
        );


    if (popularArticles.length === 0) {

        popularSolutions.innerHTML = `

            <div class="no-results">

                <strong>
                    No popular solutions yet
                </strong>

                <span>
                    Troubleshooting guides are being added.
                </span>

            </div>

        `;


        return;

    }


    popularSolutions.innerHTML =
        popularArticles
            .map(article => `

                <a
                    href="#${article.id}"
                    class="solution"
                    data-popular-article="${article.id}"
                >

                    <span>
                        ${article.title}
                    </span>

                    <span>
                        ›
                    </span>

                </a>

            `)
            .join("");


    const popularArticleLinks =
        popularSolutions.querySelectorAll(
            "[data-popular-article]"
        );


    popularArticleLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const articleID =
                    link.dataset.popularArticle;


                currentCategory = null;


                openArticle(
                    articleID,
                    {
                        source: "popular",
                        updateHistory: true
                    }
                );

            }
        );

    });

}



// ======================================================
// ARTICLE VIEW
// ======================================================

function openArticle(
    articleID,
    options = {}
) {

    const {

        source = "direct",

        category = null,

        updateHistory = true

    } = options;


    const article =
        articles.find(
            item =>
                item.id === articleID
        );


    if (!article) {
        return;
    }


    removeArticleOverlay();


    articleSource = source;


    if (category) {

        currentCategory = category;

    }


    const stepsHTML =
        (article.steps || [])
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


                    <div class="article-divider">
                    </div>


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


    setBodyOverlayState();


    const backButton =
        document.getElementById(
            "articleBackButton"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            handleArticleBack
        );

    }


    if (updateHistory) {

        const state = {

            type: "article",

            article: articleID,

            source: source,

            category: category

        };


        window.history.pushState(
            state,
            "",
            `#${articleID}`
        );

    }

}



// ======================================================
// ARTICLE BACK
// ======================================================

function handleArticleBack() {

    if (
        articleSource === "category" &&
        currentCategory
    ) {

        window.history.back();

        return;

    }


    closeArticleToHome();

}



function removeArticleOverlay() {

    const overlay =
        document.getElementById(
            "articleOverlay"
        );


    if (overlay) {

        overlay.remove();

    }


    setBodyOverlayState();

}



function closeArticleToHome() {

    removeArticleOverlay();


    articleSource = null;

    currentCategory = null;


    history.pushState(
        {
            type: "home"
        },
        "",
        window.location.pathname
    );


    setBodyOverlayState();

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


            openCategory(
                category,
                true
            );

        }
    );

});



function openCategory(
    category,
    updateHistory = true
) {

    removeArticleOverlay();

    removeCategoryOverlay();


    currentCategory = category;

    articleSource = null;


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


    setBodyOverlayState();


    const categoryBackButton =
        document.getElementById(
            "categoryBackButton"
        );


    if (categoryBackButton) {

        categoryBackButton.addEventListener(
            "click",
            handleCategoryBack
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


    if (updateHistory) {

        const slug =
            categoryToSlug(category);


        window.history.pushState(
            {
                type: "category",
                category: category
            },
            "",
            `#category/${slug}`
        );

    }

}



// ======================================================
// CATEGORY BACK
// ======================================================

function handleCategoryBack() {

    window.history.back();

}



function removeCategoryOverlay() {

    const overlay =
        document.getElementById(
            "categoryOverlay"
        );


    if (overlay) {

        overlay.remove();

    }


    setBodyOverlayState();

}



// ======================================================
// CATEGORY → ARTICLE
// ======================================================

function openArticleFromCategory(
    articleID
) {

    const category =
        currentCategory;


    /*
       Open the article while the category screen
       still exists underneath it.

       This prevents the homepage flash between
       the category page and article page.
    */

    openArticle(
        articleID,
        {
            source: "category",
            category: category,
            updateHistory: true
        }
    );


    /*
       Once the article is visible above the
       category screen, remove the category.
    */

    removeCategoryOverlay();

}



// ======================================================
// RENDER CURRENT URL / HISTORY STATE
// ======================================================

function renderCurrentLocation() {

    removeArticleOverlay();

    removeCategoryOverlay();


    const hash =
        window.location.hash
            .replace("#", "");


    // HOME

    if (!hash) {

        currentCategory = null;

        articleSource = null;

        setBodyOverlayState();

        return;

    }


    // CATEGORY

    if (
        hash.startsWith(
            "category/"
        )
    ) {

        const slug =
            hash.replace(
                "category/",
                ""
            );


        const category =
            getCategoryFromSlug(
                slug
            );


        if (category) {

            openCategory(
                category,
                false
            );

            return;

        }

    }


    // ARTICLE

    const article =
        articles.find(
            item =>
                item.id === hash
        );


    if (article) {

        const state =
            window.history.state || {};


        const source =
            state.source || "direct";


        const category =
            state.category || null;


        currentCategory =
            category;


        openArticle(
            article.id,
            {
                source: source,
                category: category,
                updateHistory: false
            }
        );


        return;

    }


    // UNKNOWN HASH

    currentCategory = null;

    articleSource = null;

    setBodyOverlayState();

}



// ======================================================
// BROWSER BACK / FORWARD
// ======================================================

window.addEventListener(
    "popstate",
    () => {

        renderCurrentLocation();

    }
);



// ======================================================
// INITIAL PAGE LOAD
// ======================================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        renderPopularSolutions();


        if (!window.location.hash) {

            history.replaceState(
                {
                    type: "home"
                },
                "",
                window.location.pathname
            );

        }


        renderCurrentLocation();

    }
);
