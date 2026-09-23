const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    console.log("Searching for:", query);
});
