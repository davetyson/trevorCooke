// Footer Year function
trevorCooke.footerYear = () => {
    let currentYear = new Date().getFullYear();
    trevorCooke.footerP.innerHTML = `© Trevor Cooke, ${currentYear}`;
}

// Formspree code to clear contact form after submission
trevorCooke.formspreeClear = () => {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
    }
}

// Initialize trevorCooke
trevorCooke.init = () => {

    // Call all functions
    trevorCooke.footerYear();
    trevorCooke.formspreeClear();
}

// Call trevorCooke initialization
trevorCooke.init();