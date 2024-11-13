import { FaArrowTrendUp, FaMagnifyingGlass } from "react-icons/fa6";
import MetricItem from "./components/MetricItem";
import { FaArrowUp, FaBell } from "react-icons/fa";
import ProjectTab from "./components/ProjectTab";
import ProjectTable from "./components/ProjectTable";

const PerformanceAndIndicators = () => {
  return (
    <section className="w-full h-screen p-10">
      <header className=" flex justify-between items-center  w-full ">
        {/* this is the header for the page */}
        <div>
          <h1 className="text-2xl font-bold">Welcome, Mireille</h1>
          <p className="text-xs">
            Track and manage tickets for all your subscribers with one click.
          </p>
        </div>

        <div className="flex items-center border rounded-md px-3">
          <FaMagnifyingGlass className="text-sm" />
          <input
            type="text"
            placeholder="search"
            className="p-1  bg-transparent text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <FaBell />
          profile
        </div>
      </header>

      <section className="my-5">
        <div className="grid grid-cols-3 gap-5 w-full ">
          <MetricItem
            text="Projects that are compliant"
            fig="07"
            meterIcon={<FaArrowUp className="text-[#3d9970]" />}
            meterNum="40%"
            waveIcon={<FaArrowTrendUp className="text-[#3d9970] text-4xl" />}
          />
          <MetricItem text="Projects with issues" fig="03" />
          <MetricItem text="Projects that are non-compliant" fig="05" />
        </div>

        {/* project tabs and search */}
        <div className="flex justify-between items-center mt-5 ">
          <div className=" flex rounded-md border">
            <ProjectTab title="All Projects" />
            <ProjectTab title="Maturation" />
            <ProjectTab title="Handover" />
            <ProjectTab title="Execution" />
            <ProjectTab title="Monitoring & Control" />
          </div>

          <div className="flex items-center border rounded-md px-3">
            <FaMagnifyingGlass className="text-sm" />
            <input
              type="text"
              placeholder="search"
              className="p-1  bg-transparent text-sm"
            />
          </div>
        </div>

        <div className="mt-9">
          <ProjectTable />
        </div>
      </section>
    </section>
  );
};

export default PerformanceAndIndicators;
