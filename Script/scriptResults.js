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
const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [
            {
                data: [75, 25], // Adjust percentage values
                backgroundColor: ["#00ffff", "#c2128d"], // Colors
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutout: "75%", // Adjust thickness of donut
        plugins: {
            legend: { display: false }, // Hide legend
        }
    }
});