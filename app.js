const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "Aprilia.png", name: "Aprilia" },
    { imgSrc: "Ducati.png", name: "Ducati" },
    { imgSrc: "Honda.png", name: "Honda" },
    { imgSrc: "Kawasaki.png", name: "Kawasaki" },
    { imgSrc: "KTM.png", name: "KTM" },
    { imgSrc: "Suzuki.png", name: "Suzuki" },
    { imgSrc: "Triumph.png", name: "Triumph" },
    { imgSrc: "Yamaha.png", name: "Yamaha" },
    { imgSrc: "Aprilia.png", name: "Aprilia" },
    { imgSrc: "Ducati.png", name: "Ducati" },
    { imgSrc: "Honda.png", name: "Honda" },
    { imgSrc: "Kawasaki.png", name: "Kawasaki" },
    { imgSrc: "KTM.png", name: "KTM" },
    { imgSrc: "Suzuki.png", name: "Suzuki" },
    { imgSrc: "Triumph.png", name: "Triumph" },
    { imgSrc: "Yamaha.png", name: "Yamaha" }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("Try Again!");
            }
        }
    }
    if(toggleCard.length === 16){
        restart("You Won!")
    }
}

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        }, 1000)
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100)
}

cardGenerator();


