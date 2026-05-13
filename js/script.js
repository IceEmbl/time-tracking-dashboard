const buttons = document.querySelectorAll(".header-navigation-list-button");
const cards = document.querySelectorAll(".card-section");

if(buttons.length && cards.length) {
    fetch("./data.json").then((response) => {
    if(!response.ok) {
        throw new Error("JSON file not found!");
    }
    return response.json();
    }).then((data) => {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                data.forEach((item, index) => {
                    const itemIndex = button.textContent.trim().toLowerCase();
                    cards[index].querySelector(".results-current").textContent = item.timeframes[itemIndex].current + "hrs";
                    cards[index].querySelector(".results-previous").textContent = "Previous - " + item.timeframes[itemIndex].previous + "hrs";
                });
            });
        });
    }).catch((error) => {
        console.log(error);
    });
}

