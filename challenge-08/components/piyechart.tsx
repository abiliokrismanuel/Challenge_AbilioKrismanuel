import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
Chartjs.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["kijang", "ferrari", "mobil Lio", "mobil Honda", "mobil Toyota"],
  datasets: [
    {
      label: "",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const piyechart = () => {
  return (
    <div className="max-w-lg mx-auto text-center pt-10 pb-10 mb-5">
      <h1 className="font-semibold text-3xl mb-7 pb-3 border-b-2">
        Data Visualisasi
      </h1>
      <Pie data={data} />
    </div>
  );
};

export default piyechart;
