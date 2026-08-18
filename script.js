window.addEventListener("DOMContentLoaded", () => {


    const ratings = document.querySelectorAll(".rating");

    setTimeout(() => {

        ratings.forEach((rating) => {

            const scoreElement = rating.querySelector(".data-score");
            const point = rating.querySelector(".point");

            if (!point) return;

            const score = Number(scoreElement.textContent);
            const position = (score / 5) * 100;

            point.style.left = position + "%";
        });

    }, 200);

});