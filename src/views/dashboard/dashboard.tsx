import { FC } from "react";

interface DashboardProp {
  title: string;
}

const Dashboard: FC<DashboardProp> = () => {
  return (
    <div>
      <button>Add Entry</button>
    </div>
  );
};

export default Dashboard;
