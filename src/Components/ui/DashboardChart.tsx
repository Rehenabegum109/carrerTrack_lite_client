
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Applied", value: 22 },
  { name: "Interview", value: 12 },
  { name: "Offer", value: 5 },
  { name: "Rejected", value: 9 },
];

const COLORS = [
  "#3B82F6",
  "#F59E0B",
  "#22C55E",
  "#EF4444",
];

const DashboardChart = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-xl font-semibold text-white mb-6">
        Application Status
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DashboardChart;

