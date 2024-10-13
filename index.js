document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Locate the heart buttons
    const articleHearts = document.querySelectorAll('.like-btn');

    // Step 2: Set up mock server communication (for now, just a console log)
    function mockServerCommunication() {
        console.log("Mock server communication triggered!");
    }

    // Step 3: Add event listeners to the like buttons
    articleHearts.forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('liked');
            mockServerCommunication();
            this.innerText = this.classList.contains('liked') ? '❤️ Liked' : '❤️ Like';
        });
    });
});
