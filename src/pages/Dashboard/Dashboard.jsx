import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* STATS */}
      <div className="row g-4 mb-4">
        <StatCard title="Total Leads" value="1,248" />
        <StatCard title="Active Contacts" value="642" />
        <StatCard title="Successful Calls" value="312" />
        <StatCard title="Conversion Rate" value="38%" />
      </div>

      {/* CHARTS */}
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="dashboard-card">
            <h6>Leads Overview</h6>
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dashboard-card">
            <h6>Contact Status</h6>
            <Doughnut data={doughnutData} />
          </div>
        </div>

      </div>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({ title, value }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="stat-card">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
}

/* ---------- CHART DATA ---------- */

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Leads",
      data: [120, 190, 300, 280, 320, 400],
      borderColor: "#2C8769",
      backgroundColor: "rgba(47,139,109,0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const barData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Calls",
      data: [30, 45, 28, 60, 52, 40],
      backgroundColor: "#2C8769",
      borderRadius: 6,
    },
  ],
};

const doughnutData = {
  labels: ["Interested", "No Interest", "Pending"],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: ["#2C8769", "#e57373", "#ffb74d"],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
