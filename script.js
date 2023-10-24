// Declare trevorCooke app
const trevorCooke = {};

// Select DOM elements for functions
trevorCooke.quoteButtonL = document.querySelector('.quoteButtonL');
trevorCooke.quoteButtonR = document.querySelector('.quoteButtonR');
trevorCooke.footerP = document.querySelector('.footerP');

// Set up DOM elements for each of the 3 testimonials. So basically...
// trevorCooke.quote1 = "Simply the best";
// trevorCooke.qAuthor1 = "Tina Turner";
// Repeat for other quotes, and later in the button functions I can choose the quote text. We would need these lines too:
// trevorCooke.currentQuote = trevorCooke.quote1;
// trevorCooke.currentAuthor = trevorCooke.qAuthor1;

// Declare quote shuffle count variable
trevorCooke.quoteNumber = 1;

// Eventually will need to refactor this quote shuffle duplication (L & R would become one function)
// Quote shuffle R function
trevorCooke.quoteShuffleR = () => {
    trevorCooke.quoteButtonR.addEventListener('click', () => {
        trevorCooke.quoteNumber = trevorCooke.quoteNumber + 1;
        if (trevorCooke.quoteNumber > 3) {
            trevorCooke.quoteNumber = 1;
        };
        console.log(trevorCooke.quoteNumber);
        // Here we can change the text of the quote block and author block in this fashion with a few if elses
        // trevorCooke.currentQuote = trevorCooke.quote[trevorCooke.quoteNumber];
        // trevorCooke.currentAuthor = trevorCooke.qAuthor[trevorCooke.quoteNumber];
    })
}

// Quote shuffle L function
trevorCooke.quoteShuffleL = () => {
    trevorCooke.quoteButtonL.addEventListener('click', () => {
        trevorCooke.quoteNumber = trevorCooke.quoteNumber - 1;
        if (trevorCooke.quoteNumber < 1) {
            trevorCooke.quoteNumber = 3;
        };
        console.log(trevorCooke.quoteNumber);
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
    trevorCooke.quoteShuffleL();
    trevorCooke.quoteShuffleR();
    trevorCooke.footerYear();
    trevorCooke.formspreeClear();
}

// Call trevorCooke initialization
trevorCooke.init();