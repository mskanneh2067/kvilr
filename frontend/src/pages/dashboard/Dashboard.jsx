import BarChartBox from "../../components/dashboard/barChartBox/BarChartBox";
import BigChartBox from "../../components/dashboard/bigChartBox/BigChartBox";
import ChartBox from "../../components/dashboard/chartBox/ChartBox";
import PieChartBox from "../../components/dashboard/pieCartBox/PieChartBox";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/data";

const Dashboard = () => {
  return (
    <div className="grid gap-3 grid-cols-[repeat(4,1fr)] auto-rows-[minmax(167px,auto)]">
      <div className="box col-[_span_1] row-[_span_3]"></div>
      <div className="box">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box ">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box col-[_span_1] row-[_span_3]">
        <PieChartBox />
      </div>
      <div className="box">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box ">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box col-[_span_2] row-[_span_2]">
        <BigChartBox />
      </div>
      <div className="box">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box ">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Dashboard;
