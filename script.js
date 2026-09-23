// ======================================================
// TECH HELP — KNOWLEDGE BASE
// ======================================================

const articles = [
    {
        id: "projector-no-picture",
        title: "Projector has no picture",
        category: "Projectors & Displays",
        icon: "monitor",
        keywords: [
            "projector",
            "display",
            "screen",
            "no picture",
            "no signal",
            "hdmi",
            "black screen"
        ],
        description: "Your computer is connected but nothing appears on the projector.",
        popular: true,
        steps: [
            {
                title: "Check the projector input",
                text: "Press Source Search or Input on the projector or remote and make sure the correct HDMI input is selected."
            },
            {
                title: "Reconnect the cable",
                text: "Disconnect the HDMI or USB-C adapter from your computer, wait a few seconds, and reconnect it."
            },
            {
                title: "Check your Mac displays",
                text: "Open System Settings → Displays and make sure the projector appears."
            },
            {
                title: "Restart the connection",
                text: "If the projector still has no picture, restart the projector and reconnect your computer after it finishes starting."
            }
        ]
    },

    {
        id: "projector-no-sound",
        title: "Projector has no sound",
        category: "Projectors & Displays",
        icon: "volume",
        keywords: [
            "projector",
            "audio",
            "sound",
            "volume",
            "hdmi",
            "speaker",
            "no audio"
        ],
        description: "The picture works, but sound is coming from the computer or there is no sound.",
        popular: true,
        steps: [
            {
                title: "Check your audio output",
                text: "On your Mac, open System Settings → Sound → Output."
            },
            {
                title: "Select the projector",
                text: "Choose the projector, HDMI device, or display from the list of sound outputs."
            },
            {
                title: "Check projector volume",
                text: "Make sure the projector is not muted and increase its volume."
            },
            {
                title: "Reconnect HDMI",
                text: "Disconnect and reconnect the HDMI or USB-C adapter, then check Sound → Output again."
            }
        ]
    },

    {
        id: "papercut-not-working",
        title: "FollowMe / PaperCut isn't working",
        category: "Printing",
        icon: "printer",
        keywords: [
            "printer",
            "printing",
            "papercut",
            "followme",
            "follow me",
            "print",
            "queue"
        ],
        description: "FollowMe is missing, PaperCut isn't connecting, or your print job isn't appearing.",
        popular: true,
        steps: [
            {
                title: "Check your connection",
                text: "Make sure your computer is connected to the school network."
            },
            {
                title: "Try FollowMe again",
                text: "Open the print window and check whether the FollowMe printer appears in the printer list."
            },
            {
                title: "Restart the application",
                text: "Quit the application you are printing from, reopen it, and try printing again."
            },
            {
                title: "Restart your computer",
                text: "If FollowMe is still missing or PaperCut isn't responding, restart your computer and try again."
            }
        ]
    },

    {
        id: "mac-display",
        title: "Mac won't connect to a display",
        category: "MacBooks",
        icon: "laptop",
        keywords: [
            "mac",
            "macbook",
            "display",
            "monitor",
            "projector",
            "hdmi",
            "usb-c",
            "screen"
        ],
        description: "Your Mac isn't detecting a monitor, TV, or classroom display.",
        popular: true,
        steps: [
            {
                title: "Reconnect the adapter",
                text: "Disconnect the USB-C or HDMI adapter from your Mac and reconnect it."
            },
            {
                title: "Check Displays",
                text: "Open System Settings → Displays and look for the external display."
            },
            {
                title: "Check the display input",
                text: "Make sure the monitor, TV, or projector is using the correct HDMI or input source."
            },
            {
                title: "Restart your Mac",
                text: "Restart the Mac with the display disconnected, then reconnect it after signing in."
            }
        ]
    },

    {
        id: "chromebook-wont-start",
        title: "Chromebook won't turn on",
        category: "Chromebooks",
        icon: "laptop",
        keywords: [
            "chromebook",
            "chrome",
            "power",
            "won't turn on",
            "black screen",
            "dead",
            "startup"
        ],
        description: "The Chromebook appears dead, has a black screen, or won't start.",
        popular: true,
        steps: [
            {
                title: "Connect the charger",
                text: "Plug the Chromebook into power and leave it connected for a few minutes."
            },
            {
                title: "Try the power button",
                text: "Press the power button once and wait several seconds."
            },
            {
                title: "Perform a hardware reset",
                text: "Hold Refresh and tap Power. Release Refresh when the Chromebook begins starting."
            },
            {
                title: "Try another charger",
                text: "If available, test with another compatible Chromebook charger."
            }
        ]
    }
];


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
    searchInput.addEventListener("input", event => {
        searchArticles(event.target.value);
    });
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
