const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "%risposte",
        data: [66.7, 33.3],
        backgroundColor: ["#00ffff", "#c2128d"],
      },
    ],
  },
  options: {},
});
