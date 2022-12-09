let cardIndex = 1;
showCard(cardIndex);

function plusCard(n) {
    showCard(cardIndex += n);
}

function currentCard(n) {
    showCard(cardIndex = n);
}

function showCard(n) {
    let i;
    let cards = document.getElementsByClassName("projectCard");
    let dots = document.getElementsByClassName("dot");
    if (n > cards.length) {cardIndex = 1}
    if (n < 1) {cardIndex = cards.length}
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    cards[cardIndex-1].style.display = "block";
    dots[cardIndex-1].className += " active";
}