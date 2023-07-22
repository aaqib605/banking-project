const darkBlue = "#0D1282";
const royalBlue = "#3E54AC";
const azure = "#8696FE";

const ctx_sm = document.getElementById("myChart__sm");

new Chart(ctx_sm, {
  type: "bar",
  data: {
    labels: [20, 35, 40, 45, 50, 55, 60],
    datasets: [
      {
        label: "Dataset 1",
        data: [35, 45, 55, 65, 75, 85, 100],
        backgroundColor: royalBlue,
      },
      {
        label: "Dataset 2",
        data: [45, 55, 65, 75, 85, 95, 100],
        backgroundColor: darkBlue,
      },
      {
        label: "Dataset 3",
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: azure,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100,
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  },
});

const ctx_lg = document.getElementById("myChart__lg");

new Chart(ctx_lg, {
  type: "bar",
  data: {
    labels: [20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
        backgroundColor: royalBlue,
      },
      {
        label: "Dataset 2",
        data: [20, 25, 30, 35, 40, 45, 50, 70, 75, 80, 90, 95, 100],
        backgroundColor: darkBlue,
      },
      {
        label: "Dataset 3",
        data: [25, 30, 35, 40, 45, 50, 75, 80, 85, 95, 110, 120, 130],
        backgroundColor: azure,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: (context) => {
          return context.dataIndex % 2 === 0 && context.dataIndex !== 0;
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100,
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
    categoryPercentage: 0.7,
    barPercentage: 0.7,
  },
});

// .progress-bar {
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
// }

// .progress-bar__average {
//   background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
//     conic-gradient(#03c988 78%, #b5f1cc 0);
// }

// .progress-bar__top {
//   background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
//     conic-gradient(#03c988 95%, #b5f1cc 0);
// }

// .progress-bar__me {
//   background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
//     conic-gradient(#03c988 59%, #b5f1cc 0);
// }

// .progress-bar__average::before {
//   content: "78%";
//   font-weight: bold;
// }

// .progress-bar__top::before {
//   content: "95%";
//   font-weight: bold;
// }

// .progress-bar__me::before {
//   content: "59%";
//   font-weight: bold;
// }
