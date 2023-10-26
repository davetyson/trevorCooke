// Declare trevorCooke app
const trevorCooke = {};

// Select DOM elements for functions
trevorCooke.quoteButtonL = document.querySelector('.quoteButtonL');
trevorCooke.quoteButtonR = document.querySelector('.quoteButtonR');
trevorCooke.currentQuoteP = document.querySelector('.testimonialP');
trevorCooke.currentAuthorH = document.querySelector('.testimonialH');
trevorCooke.footerP = document.querySelector('.footerP');

// Quote & Author arrays
trevorCooke.quotes = [
    "Simply the best.",
    "Girls just wanna have fun... with Trevor in the studio!",
    "Pretty, pretty good!"
];
trevorCooke.authors = [
    "Tina Turner",
    "Cindy Lauper",
    "Larry David"
];

// Declare quote shuffle count variable
trevorCooke.quoteNumber = 0;

// Function to cycle quotes
trevorCooke.quoteCycle = () => {
    trevorCooke.currentQuoteP.classList = "testimonialP quoteExit";
    trevorCooke.currentAuthorH.classList = "testimonialH quoteExit";
    setTimeout(() => {
        if (trevorCooke.quoteNumber > 2) {
            trevorCooke.quoteNumber = 0;
        } else if (trevorCooke.quoteNumber < 0) {
            trevorCooke.quoteNumber = 2;
        }
        if (trevorCooke.quoteNumber === 0) {
            trevorCooke.currentQuoteP.innerHTML = trevorCooke.quotes[0];
            trevorCooke.currentAuthorH.innerHTML = trevorCooke.authors[0];
        } else if (trevorCooke.quoteNumber === 1) {
            trevorCooke.currentQuoteP.innerHTML = trevorCooke.quotes[1];
            trevorCooke.currentAuthorH.innerHTML = trevorCooke.authors[1];
        } else {
            trevorCooke.currentQuoteP.innerHTML = trevorCooke.quotes[2];
            trevorCooke.currentAuthorH.innerHTML = trevorCooke.authors[2];
        }
        // I need to have the animation run every time the button is pressed and this function is run, will need to look it up again. Right now it does come in on initial entry
        trevorCooke.currentQuoteP.classList = "testimonialP quoteEntry";
        trevorCooke.currentAuthorH.classList = "testimonialH quoteEntry";
    }, 200);
};

// Quote shuffle
trevorCooke.quoteShuffle = () => {
    trevorCooke.quoteButtonL.addEventListener('click', () => {
        trevorCooke.quoteNumber = trevorCooke.quoteNumber - 1;
        trevorCooke.quoteCycle();
    })
    trevorCooke.quoteButtonR.addEventListener('click', () => {
        trevorCooke.quoteNumber = trevorCooke.quoteNumber + 1;
        trevorCooke.quoteCycle();
    })
}

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
    trevorCooke.quoteCycle();
    trevorCooke.quoteShuffle();
    trevorCooke.footerYear();
    trevorCooke.formspreeClear();
}

// Call trevorCooke initialization
trevorCooke.init();