document.addEventListener('DOMContentLoaded', (event) => {
    // Function to get the current page URL
    function getCurrentPageURL() {
        return window.location.href;
    }

    // Function to set the share URLs
    function setShareURLs() {
        const pageURL = getCurrentPageURL();

        // Facebook
        const fbButton = document.querySelector('.share-button.facebook');
        if (fbButton) {
            fbButton.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageURL)}`;
        }

        // LinkedIn
        const linkedinButton = document.querySelector('.share-button.linkedin');
        if (linkedinButton) {
            linkedinButton.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageURL)}`;
        }

        // Twitter (X)
        const twitterButton = document.querySelector('.share-button.twitter');
        if (twitterButton) {
            twitterButton.href = `https://twitter.com/share?url=${encodeURIComponent(pageURL)}`;
        }
    }

    // Function to copy the current page URL to clipboard and show tooltip
    function copyURLToClipboard(event) {
        const pageURL = getCurrentPageURL();
        navigator.clipboard.writeText(pageURL).then(() => {
            const tooltip = document.getElementById('tooltip');
            tooltip.classList.add('show-tooltip');
            setTimeout(() => {
                tooltip.classList.remove('show-tooltip');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    }

    // Set the share URLs when the page loads
    setShareURLs();

    // Add event listener to the copy URL button
    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', copyURLToClipboard);
    }
});
