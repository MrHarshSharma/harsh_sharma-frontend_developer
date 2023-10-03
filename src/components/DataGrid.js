import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../common/Pagination";

function DataGrid() {
  const data = useSelector((state) => state.setData);
  const [statusFilter, setStatusFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [launchFilter, setLaunchFilter] = useState([]);

  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");
  const [launch, setLaunch] = useState("All");


  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.setPageNumber);
  const recordsPerPage = 10;
  const [currentRecords, setCurrentRecords] = useState([]);
  const [spareRecords, setSpareRecords] = useState([]);
  const [nPages, setNPages] = useState(0);

  useEffect(() => {
    setStatusFilter([...new Set(data.map((capsule) => capsule.status))]);
    setTypeFilter([...new Set(data.map((capsule) => capsule.type))]);
    setLaunchFilter([
      ...new Set(data.map((capsule) => capsule.original_launch)),
    ]);
  }, [data]);

  useEffect(() => {
    if (status == "All") {
      resetRecord();
    } else {
      setType("All");
      setLaunch("All");
      setCurrentRecords(spareRecords.filter((c) => c.status == status));
    }
  }, [status]);

  useEffect(() => {
    if (type == "All") {
      resetRecord();
    } else {
      setStatus("All");

      setLaunch("All");
      setCurrentRecords(spareRecords.filter((c) => c.type == type));
    }
  }, [type]);

  useEffect(() => {
    if (launch == "All") {
      resetRecord();
    } else {
      setStatus("All");
      setType("All");

      setCurrentRecords(
        spareRecords.filter((c) => c.original_launch == launch)
      );
    }
  }, [launch]);

  const resetRecord = () => {
    const indexOfLastRecord = selectedPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    setCurrentRecords(data.slice(indexOfFirstRecord, indexOfLastRecord));
    setSpareRecords(data);
    setNPages(Math.ceil(data.length / recordsPerPage));
  };

  useEffect(() => {
    resetRecord();
    resetFilter();
  }, [data, selectedPage]);

  const renderStatus = (state) => {
    switch (state) {
      case "active":
        return <div className="bg-lime-600 h-4 w-4 rounded-xl"></div>;
      case "destroyed":
        return <div className="bg-gray-600 h-4 w-4 rounded-xl"></div>;
      case "unknown":
        return <div className="bg-yellow-600 h-4 w-4 rounded-xl"></div>;
      case "retired":
        return <div className="bg-red-600 h-4 w-4 rounded-xl"></div>;
      default:
        break;
    }
  };

  const generateMission = (AllMission) => {
    return AllMission?.map((mission, key) => (
      <div
        key={key}
        className="flex flex-row gap-2 items-center rounded-full bg-slate-900 text-white pl-1 pr-2 h-8"
      >
        <div className="w-6 h-6 bg-slate-300 rounded-full text-sm text-slate-900 flex flex-row items-center justify-center">
          {mission?.flight}
        </div>
        <div className="max-w-fit text-sm overflow-hidden">{mission?.name}</div>
      </div>
    ));
  };

  const resetFilter = () => {
    setStatus("All");
    setType("All");
    setLaunch("All");
  };

const convertToDate=(date)=>{
    return new Date(date).toDateString()
}
  return (
    <section className="px-16 py-8" data-testid="datagrid-id">
    <h1 className="text-3xl">Capsules</h1>
      <div data-testid="filter-id" className="gap-8 flex flex-col md:flex-row items-start md:justify-end  py-10">
        
        <div>
          <label>Status</label>
          <select
            className="bg-slate-900 rounded-md text-white ml-2 px-2 py-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            {statusFilter.map((stat, key) => (
              <option value={stat} key={key}>
                {stat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Type</label>
          <select
            className="bg-slate-900 rounded-md text-white ml-2 px-2 py-1"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="All">All</option>
            {typeFilter.map((stat, key) => (
              <option value={stat} key={key}>
                {stat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Launch</label>
          <select
            className="bg-slate-900 rounded-md text-white ml-2 px-2 py-1"
            value={launch}
            onChange={(e) => setLaunch(e.target.value)}
          >
            <option value="All">All</option>
            {launchFilter.map((stat, key) => (
              <option value={stat} key={key}>
                {convertToDate(stat)}
              </option>
            ))}
          </select>
        </div>
        <span
          className="bg-slate-500 text-white px-2 py-1 rounded-md cursor-pointer hover:shadow-md hover:bg-slate-600 h-fit flex  align-center justify-center"
          onClick={resetFilter}
        >
          Reset
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
        {currentRecords.map((capsule, key) => (
          <Popover placement="bottom" key={key}>
            <PopoverHandler>
              <div className="flex flex-row justify-between items-center bg-slate-100 p-4 rounded-md cursor-pointer hover:shadow-md">
                <span>
                  <label className="font-bold ">serial no:</label>{" "}
                  {capsule?.capsule_serial}
                </span>
                <span>{renderStatus(capsule?.status)}</span>
              </div>
            </PopoverHandler>
            <PopoverContent className="bg-slate-100 p-0 rounded-md min-w-20">
              <div className="flex flex-col gap-2 text-start shadow-lg p-4 rounded-md">
                <div className="flex flex-row justify-between items-center ">
                  <span>
                    <label className="font-bold ">serial no:</label>{" "}
                    {capsule?.capsule_serial}
                  </span>
                  <span>{renderStatus(capsule?.status)}</span>
                </div>
                <span>
                  <label className="font-bold ">Info:</label> {capsule?.details}
                </span>
                <span>
                  <label className="font-bold ">Landings:</label>{" "}
                  {capsule?.landings}
                </span>
                <span>
                  <label className="font-bold ">Reuse:</label>{" "}
                  {capsule?.reuse_count}
                </span>
                <span>
                  <div className="flex flex-row gap-3 flex-wrap text-center">
                    <label className="font-bold ">Mission:</label>{" "}
                    {generateMission(capsule?.missions)}
                  </div>
                </span>
              </div>
            </PopoverContent>
          </Popover>
        ))}

        {currentRecords.length == 0 && (
          <div className="flex flex-row justify-between items-center bg-slate-100 p-4 rounded-md">
            No record
          </div>
        )}
      </div>

      <div className="mt-10">
        <Pagination nPages={nPages} />
      </div>
    </section>
  );
}

export default DataGrid;
