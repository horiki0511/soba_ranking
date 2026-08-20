
const takuroScores =
    document.querySelectorAll("#takuro .data-score");
const takuroData = [];
for (let i = 0; i < 8; i++) {
    const score = Number(takuroScores[i].textContent);
    takuroData.push(score);
}

const horikiScores =
    document.querySelectorAll("#horiki .data-score");
const horikiData = [];
for (let i = 0; i < 8; i++) {
    const score = Number(horikiScores[i].textContent);
    horikiData.push(score);
}

const takuroChart = document.getElementById("takuroChart");
const horikiChart = document.getElementById("horikiChart");

new Chart(takuroChart, {
    type: "radar",
    data: {
        labels: [
            "外観",
            "内装",
            "接客態度",
            "味",
            "盛り付け",
            "メニュー",
            "哲学",
            "値段"
        ],
        datasets: [{
            label: "拓郎評価",
            data: takuroData,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            backgroundColor: "rgba(70, 120, 90, 0.15)",
            borderColor: "rgba(70, 120, 90, 0.9)",
            pointBackgroundColor: "rgba(70, 120, 90, 1)"
        }]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 5
            }
        }
    }
});

new Chart(horikiChart, {
    type: "radar",
    data: {
        labels: [
            "外観",
            "内装",
            "接客態度",
            "味",
            "盛り付け",
            "メニュー",
            "哲学",
            "値段"
        ],
        datasets: [{
            label: "堀木評価",
            data: horikiData,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            backgroundColor: "rgba(80, 100, 140, 0.15)",
            borderColor: "rgba(80, 100, 140, 0.9)",
            pointBackgroundColor: "rgba(80, 100, 140, 1)"
        }]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 5
            }
        }
    }
});