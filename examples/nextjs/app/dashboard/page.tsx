"use client";
import { Chart1 } from "@/app/components/chart1";
import { Chart2 } from "@/app/components/chart2";
import { Chart3 } from "@/app/components/chart3";
import { Chart4 } from "@/app/components/chart4";

const Dashboard = () => {
    return (
        <div className="container space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-y-0 gap-x-4">
                <div className="col-span-1">
                    <Chart1 />
                </div>
                <div className="col-span-1">
                    <Chart3 />
                </div>
                <div className="col-span-1">
                    <Chart4 />
                </div>
            </div>
            <Chart2 />
        </div>
    );
};

export default Dashboard;
