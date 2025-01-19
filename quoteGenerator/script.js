const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you are going through hell, keep going.", author: "Winston Churchill" }
  ];


function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function generateQuote() {
    const quote = getRandomQuote();
    document.querySelector('.quote').textContent = `"${quote.text}"`;
    document.querySelector('.author').textContent = `- ${quote.author}`;
}

