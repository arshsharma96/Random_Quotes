/******************************************
*****************************************/

/***
 * `quotes` array
 ***/
let quotes = [];
let object1 = {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, \n" +
        " I am out of control and at times hard to handle. But if you can't handle \n" +
        "me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "GoodReads",
    year: 1960
};
let object2 = {
    quote: "You've gotta dance like there's nobody watching,\n" +
        "Love like you'll never be hurt,\n" +
        "Sing like there's nobody listening,\n" +
        "And live like it's heaven on earth.",
    source: "William W. Purkey",
    citation: "GoodReads",
    year: 1946
};
let object3 = {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Mae West",
    citation: "GoodReads",
};
let object4 = {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost",
}
let object5 = {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
    citation: "GoodReads"
}

quotes.push(object1);
quotes.push(object2);
quotes.push(object3);
quotes.push(object4);
quotes.push(object5);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
    let randNum = Math.floor(Math.random() * (quotes.length - 1));
    return quotes[randNum];
}

/***
 * `printQuote` function
***/

function printQuote(){
    let randomQuote = getRandomQuote();
    let htmlString = "<p class=\"quote\">" + randomQuote.quote + "</p>";
    htmlString += "<p class=\"source\">" + randomQuote.source;

    if(randomQuote.hasOwnProperty("citation") && randomQuote.hasOwnProperty("year")){
        htmlString += "<span class=\"citation\">" + randomQuote.citation +
            "</span><span class=\"year\">" + randomQuote.year + "</span></p>";
    }else if(randomQuote.hasOwnProperty("citation")){
        htmlString += "<span class=\"citation\">" + randomQuote.citation + "</span></p>";
    }else if(randomQuote.hasOwnProperty("year")){
        htmlString += "<span class=\"year\">" + randomQuote.year + "</span></p>";
    }else{
        htmlString += "</p>";
    }

    document.getElementById("quote-box").innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById("load-quote").addEventListener("click", printQuote);