import {
  BriefcaseBusiness,
  Clock3,
  CircleCheckBig,
  CircleX,
  FileText,
} from "lucide-react";
import StatsCard from "../Components/ui/StatsCard";
import DashboardChart from "../Components/ui/DashboardChart";



const Dashboard = () => {
  return (
    <div>

      <h2 className="text-3xl font-bold text-white mb-8">
        Dashboard Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        <StatsCard
          title="Total Applications"
          value={48}
          icon={FileText}
          color="bg-indigo-600"
        />

        <StatsCard
          title="Applied"
          value={22}
          icon={BriefcaseBusiness}
          color="bg-blue-600"
        />

        <StatsCard
          title="Interview"
          value={12}
          icon={Clock3}
          color="bg-amber-500"
        />

        <StatsCard
          title="Offer"
          value={5}
          icon={CircleCheckBig}
          color="bg-green-600"
        />

        <StatsCard
          title="Rejected"
          value={9}
          icon={CircleX}
          color="bg-red-600"
        />


      </div>
<DashboardChart />
    </div>
  );
};

export default Dashboard;