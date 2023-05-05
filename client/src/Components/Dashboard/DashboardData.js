export const pieData = {
  labels: ["Squats","pullups","crunches","Biceps"],
  datasets: [
    {
      label: "Workout Breakdown",
      data: [20, 30, 15, 35],
      backgroundColor: ["#d8d8d8", "#89cff0", "#8d67af", "#7393b3"],
      borderWidth: 1,
    },
  ],
};

export const LineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Weight Progress",
      data: [150, 145, 142, 138, 135, 132, 130],
      fill: false,
      backgroundColor: "#d8d8d8",
      borderColor: "#8d67af",
    },
  ],
};

export const LineOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const BarData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Calories Burnt",
      data: [500, 550, 600, 450, 700, 800, 650],
      backgroundColor: "#8d67af",
      borderWidth: 1,
    },
    {
      label: "Calories Consumed",
      data: [400, 450, 500, 550, 600, 550, 500],
      backgroundColor: "#d8d8d8",
      borderWidth: 1,
    },
  ],
};

export const BarOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const ScatterData = {
  datasets: [
    {
      label: "Calories Burnt vs Workouts Done",
      data: [
        { x: 10, y: 200 },
        { x: 15, y: 400 },
        { x: 20, y: 600 },
        { x: 25, y: 800 },
        { x: 30, y: 1000 },
      ],
      backgroundColor: "#8d67af",
      borderWidth: 1,
    },
  ],
};

export const ScatterOptions = {
  scales: {
    xAxes: [
      {
        type: "linear",
        position: "bottom",
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
