// const ctx = document.getElementById("myChart");

// new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     datasets: [
//       {
//         label: "%risposte",
//         data: [66.7, 33.3],
//         backgroundColor: ["#00ffff", "#c2128d"],
//       },
//     ],
//   },
//   options: {
//       cutout: '80%',
//       borderWidth: '0',

//   },
// });
//  const xCenter=chart.getDatasetMeta(0).data[0].x;
//  const yCenter=chart.getDatasetMeta(0).data[0].y;

// const textInsideChart= {
//   id: 'textAroundDoughnut',
//   beforeDataSetsDraw(chart,args,plugins){
//     const {ctx,data} = chart;

//     ctx.save();
//     ctx.font = ' bold 20px sans-serif';
//     ctx.fillStyle='black';
//     ctx.fillText ('TOTAL',xCenter,0+30);
//     ctx.textAlign= 'center';
//   }
// }
// animation: {
//   onComplete: function () {
//       let chartInstance = this.chart;
//       let ctx = chartInstance.ctx;
//       let width = chartInstance.width;
//       let height = chartInstance.height;

//       ctx.restore();
//       let fontSize = (height / 120).toFixed(2);
//       ctx.font = fontSize + "em sans-serif";
//       ctx.textBaseline = "middle";

//       let text = "66.7% Correct";  // Text to display in center
//       let textX = Math.round((width - ctx.measureText(text).width) / 2);
//       let textY = height / 2;

//       ctx.fillStyle = "#ffffff";  // Set text color
//       ctx.fillText(text, textX, textY);
//       ctx.save();
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart").getContext("2d");

  // Recupera i dati salvati nella pagina precedente
  const quizData = localStorage.getItem("quizResult");

  let correct = 60;
  let wrong = 100 - correct;
  let correctAnswers = 0;
  let totalQuestions = 1;
  if (quizData) {
    // Converte i dati da stringa JSON a oggetto JavaScript
    const parsedData = JSON.parse(quizData);

    correctAnswers = parsedData.correctAnswers;
    totalQuestions = parsedData.totalQuestions;

    // Calcola le percentuali
    correct = Math.round((correctAnswers / totalQuestions) * 100);
    wrong = 100 - correct;
  }

  //  Cambio il testo al centro del grafico in base al risultato delle risposte e seleziono tutti gli elementi html che mi interessano da modificare

  const examResultText = document.getElementById("examResult");
  const notificationText = document.getElementById("notification");
  const correctPercentage = document.querySelector(".correct .percentage");
  const correctQuestions = document.querySelector(".correct .questions");
  const wrongPercentage = document.querySelector(".wrong .percentage");
  const wrongQuestions = document.querySelector(".wrong .questions");

  // Modifica il testo in base al valore di correct
  if (correct < 60) {
    examResultText.innerHTML = `Something must have gone wrong!<br><span class='not-pass'>You answered wrong to too many questions.</span>`;
  } else {
  }

  if (correct < 60) {
    notificationText.innerHTML = "Ask Stefano to reopen the benchmark";
  } else {
  }
  // Calcola il numero di domande corrette e sbagliate
  //
  //   const correctCount = Math.round((correct / 100) * totalQuestions);
  //   const wrongCount = totalQuestions - correctCount;

  correctPercentage.textContent = `${correct}%`;
  correctQuestions.textContent = `${correctAnswers}/${totalQuestions} questions`;
  wrongPercentage.textContent = `${wrong}%`;
  wrongQuestions.textContent = `${
    totalQuestions - correctAnswers
  }/${totalQuestions} questions`;

  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "%risposte",
          data: [correct, wrong], // Adjust percentage values
          backgroundColor: ["#00ffff", "#c2128d"], // Colors
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "75%", // Adjust thickness of donut
      plugins: {
        legend: { display: false }, // Hide legend
      },
    },
  });
});
