import React, { useState } from "react";
import RecievedIcon from "./assets/recieved.png";
import SpamIcon from "./assets/spam.png";
import SentIcon from "./assets/sent.png";
import InboxIcon from "./assets/inbox.png";
import DisableIcon from "./assets/disable.png";
import EnableIcon from "./assets/enable.png";
import PauseIcon from "./assets/pause.png";
import ReloadIcon from "./assets/reload.png";
import TagIcon from "./assets/tag.png";
import FaChevronDown from "./assets/FaChevronDown.png"; // Ensure this is used correctly or remove
import Donoughtchart from "./assets/Donoughtchart.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
  datasets: [
    {
      label: "Warmup Emails Sent",
      data: [70, 60, 80, 60, 90, 100, 90],
      backgroundColor: "#4CAF50",
      barThickness: 12,
    },
    {
      label: "Saved from Spam",
      data: [40, 50, 30, 40, 50, 60, 50],
      backgroundColor: "#FFA000",
      barThickness: 12,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#B0B0B0",
        display: true,
      },
      grid: {
        display: true,
      },
    },
    x: {
      ticks: {
        color: "#B0B0B0",
        display: true,
      },
      grid: {
        display: true,
      },
    },
  },
};

const doughnutData = {
  labels: ["Sent Emails", "Saved from Spam"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#4CAF50", "#FFA000"],
      hoverBackgroundColor: ["#45a049", "#e68a00"],
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
  cutout: "70%",
};

const SummaryCard = ({ icon, value, label, color }) => {
  return (
    <div
      className={`p-4 rounded-lg text-[18px] flex flex-col gap-4 items-start ${color}`}
      style={{
        // width: "270px",
        // height: "170px",
        borderRadius: "20px",
        opacity: "1",
      }}
    >
      <img src={icon} alt="Icon" className="w-8 h-8 mr-4" />
      <div className="flex-col">
        <span className="text-1xl font-bold">{value}</span>
        <p className="text-base text-[15px] font-semibold text-[#696C9B]">
          {label}
        </p>
      </div>
    </div>
  );
};

const WarmupEmailsVisuals = () => {
  const sentPercentage = 70;
  const savedPercentage = 12;

  return (
    <div
      className="p-3 rounded-lg flex flex-wrap justify-between items-center gap-8"
      // style={{
      //   //  width: "1112px",
      //   //  height: "238px",
      //     opacity: "1" }}
    >
      <div className="flex-shrink-0 relative w-40 h-40">
        <Doughnut data={doughnutData} options={doughnutOptions} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{sentPercentage}%</span>
          <span className="text-sm">Sent Emails</span>
        </div>
      </div>
      <div className="ml-6 mt-2">
        <div className="mb-2 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-[12px] font-semibold">
            Warmup email sent{" "}
            <span className="font-semibold text-green-600">
              {sentPercentage}% (67)
            </span>
          </span>
        </div>
        <div className="text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          <span className="text-[12px] font-semibold">
            Saved from spam{" "}
            <span className="font-semibold text-yellow-600">
              {savedPercentage}% (20)
            </span>
          </span>
        </div>
      </div>
      <div className="">
        <Bar
          data={barData}
          options={barOptions}
          style={{ width: "514px", height: "155px", borderRadius: "16px" }}
        />
      </div>
    </div>
  );
};

const WarmupDashboard = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [weekdaysOnly, setWeekdaysOnly] = useState(false);
  const [readEmulation, setReadEmulation] = useState(false);
  const [customTracking, setCustomTracking] = useState(false);

  const toggleAdvancedSettings = () => {
    setShowAdvanced(!showAdvanced);
  };

  const toggleWeekdaysOnly = () => {
    setWeekdaysOnly(!weekdaysOnly);
  };

  const toggleReadEmulation = () => {
    setReadEmulation(!readEmulation);
  };

  const toggleCustomTracking = () => {
    setCustomTracking(!customTracking);
  };

  const [openRate, setOpenRate] = useState(80);
  const [spamProtection, setSpamProtection] = useState(80);
  const [markImportant, setMarkImportant] = useState(80);

  const handleOpenRateChange = (e) => setOpenRate(e.target.value);
  const handleSpamProtectionChange = (e) => setSpamProtection(e.target.value);
  const handleMarkImportantChange = (e) => setMarkImportant(e.target.value);

  return (
    <div
      className=" "
      style={{
        // width: "1112px",
        padding: "0px 0px 40px 0px",
        gap: "40px",
        opacity: "1",
      }}
    >
      <div className="container  lg:px-[10rem] mx-auto p-4 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold">
              Lorenzo Cracco (lorenzo.cracco@tecsavingenergy.org)
            </h2>
            <p className="text-sm text-[#9CA3AF]">
              Started on Mar 23, 2024 | 4 months ago
            </p>
          </div>
          <button className="bg-[#684FFF] text-white py-2 px-3 text-[12px] rounded-full flex items-center">
            <img
              src={PauseIcon}
              alt="Pause"
              className="mr-2 w-4 h-4 font-size: 12px"
            />
            Pause email account
          </button>
        </div>

        <div className="flex mb-4">
          <div
            className="display-flex py-1 px-1 bg-white-500"
            style={{ borderRadius: "3px" }}
          >
            <button className="bg-[#684FFF] text-white py-2 px-3 rounded text-[12px]">
              Warm Up
            </button>
            <button
              className="bg-[#FFF] text-[#9CA3AF] py-2 px-3 rounded text-[12px]"
              style={{ borderRadius: "3px", opacity: 2 }}
            >
              Personal Setting
            </button>
          </div>
          <div className="flex-grow"></div>

          <div className="flex items-center">
            <span className="mr-5 text-[12px] font-semibold text-black">
              Warm Up Setting
            </span>

            <div className="flex items-center bg-[#F2F0FF] rounded px-1 py-1">
              <button
                onClick={toggleWeekdaysOnly}
                className={`${
                  !weekdaysOnly
                    ? "bg-[#FFFFFF] text-[#9A9CBC]"
                    : "bg-[#F2F0FF] text-[#9A9CBC]"
                } py-2 px-2 rounded flex items-center text-[12px]`}
              >
                <img src={DisableIcon} alt="Disable" className="w-4 h-4 mr-1" />
                Disable
              </button>
              <button
                onClick={toggleWeekdaysOnly}
                className={`${
                  weekdaysOnly
                    ? "bg-[#684FFF] text-white"
                    : "bg-[#F2F0FF] text-[#9A9CBC]"
                } py-2 px-2 rounded flex items-center text-[12px]`}
              >
                <img src={EnableIcon} alt="Enable" className="w-4 h-4 mr-1" />
                Enable
              </button>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Summary for past week</h3>

        <div
          className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-4 gap-5 mb-1"
          style={{
            // width: "1112px",
            // height: "222px",
            gap: "20px",
            borderRadius: "20px 0px 0px 0px",
          }}
        >
          <SummaryCard
            icon={RecievedIcon}
            value={134}
            label="Warmup emails received"
            color="bg-[#E1DBFF]"
          />
          <SummaryCard
            icon={SpamIcon}
            value={106}
            label="Saved from spam"
            color="bg-[#FFF4DE]"
          />
          <SummaryCard
            icon={SentIcon}
            value={50}
            label="Warmup emails sent"
            color="bg-[#D5F6E8]"
          />
          <SummaryCard
            icon={InboxIcon}
            value={67}
            label="Landed in Inbox"
            color="bg-[#F0E1FF]"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-6 mb-2">Warmup Emails Visuals</h3>
          <WarmupEmailsVisuals />
        </div>

        <h3 className="text-lg text-black-500 font-semibold mb-4">
          Warmup Basics Settings
        </h3>
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Warmup filter tag
            </label>
            <div className="flex items-center border rounded-full p-2">
              <img
                src={TagIcon}
                alt="Tag"
                className="w-4 h-4 bg-[#F2F2F7] rounded-full text-gray-400 mr-3"
              />
              <input
                type="text"
                defaultValue="feathers_drop_half"
                className="flex-grow outline-none text-[#6B7280] text-sm rounded-full"
              />
              <button className="text-[#684FFF]">
                <img src={ReloadIcon} alt="Reload" className="w-7 h-7" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Increase per day
              </label>
              <input
                type="text"
                placeholder="Suggested 1"
                className="w-full border rounded-full p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Daily warmup limit
              </label>
              <input
                type="text"
                placeholder="Suggested 10"
                className="w-full border rounded-full p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Reply rate %
              </label>
              <input
                type="text"
                placeholder="Suggested 30"
                className="w-full border rounded-full p-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex justify-center items-center">
          <button
            onClick={toggleAdvancedSettings}
            style={{ boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)" }}
            className="flex items-center text-[#9CA3AF] py-1 px-3 rounded-full text-sm"
          >
            <span>{showAdvanced ? "Show less" : "Show advanced Setting"}</span>
            <img
              src={FaChevronDown}
              alt="Chevron Down"
              className={`ml-1 w-6 h-6 rounded-full bg-[#F3F4F6] ${
                showAdvanced ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {showAdvanced && (
          <div
            className="bg-white p-4 mt-4 rounded-lg "
            style={{
              // width: "1112px",
              gap: "20px",
              opacity: "1",
              borderRadius: "2rem",
            }}
          >
            <h3 className="text-[24px] font-bold mb-2">
              Warmup Advance Settings
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between bg-white rounded-lg p-4 shadow-md items-center">
                <div>
                  <p className="font-medium text-black-500">Weekdays only</p>
                  <p className="text-[#6B7280] text-[13px]">
                    Only send warmup emails on weekdays for a more natural
                    sending pattern
                  </p>
                </div>
                <div className="flex items-center bg-[#F2F0FF] rounded px-1 py-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleWeekdaysOnly}
                      className={`${
                        !weekdaysOnly
                          ? "bg-neutral-400 text-[#FFFFFF]"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Disable
                    </button>
                    <button
                      onClick={toggleWeekdaysOnly}
                      className={`${
                        weekdaysOnly
                          ? "bg-[#684FFF] text-white"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-white rounded-lg p-4 shadow-md items-center">
                <div>
                  <p className="font-medium text-black-500">Read emulation</p>
                  <p className="text-[#6B7280] text-[13px]">
                    Spend time and scroll through your warmup email to emulate
                    human-like reading
                  </p>
                </div>
                <div className="flex items-center bg-[#F2F0FF] rounded px-1 py-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleReadEmulation}
                      className={`${
                        !readEmulation
                          ? "bg-neutral-400 text-[#FFFFFF]"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Disable
                    </button>
                    <button
                      onClick={toggleReadEmulation}
                      className={`${
                        readEmulation
                          ? "bg-[#684FFF] text-white"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-white rounded-lg p-4 shadow-md items-center">
                <div>
                  <p className="font-medium">Warm custom tracking domain</p>
                  <p className="text-gray-500 text-[13px]">
                    Include your custom tracking domain in your warmup emails to
                    further improve deliverability
                  </p>
                </div>
                <div className="flex items-center bg-[#F2F0FF] rounded px-1 py-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleCustomTracking}
                      className={`${
                        !customTracking
                          ? "bg-neutral-400 text-[#FFFFFF]"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Disable
                    </button>
                    <button
                      onClick={toggleCustomTracking}
                      className={`${
                        customTracking
                          ? "bg-[#684FFF] text-white"
                          : "bg-[#F2F0FF] text-[#9A9CBC]"
                      } py-2 px-4 text-[12px] rounded`}
                    >
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-start gap-2">
                <div
                  className="flex flex-col h-[100%] pt-6 pb-10  justify-between items-stretch bg-white rounded-lg p-4 shadow-md"
                  style={{ width: "100%" }}
                >
                  <label className="block text-[16px] text-black-500 font-medium mb-1">
                    Open Rate
                  </label>
                  <label className="block text-[#6B7280] text-[12px] font-sm mb-1">
                    How many of your warm up emails to open
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={openRate}
                    onChange={handleOpenRateChange}
                    className="w-full mt-8"
                    style={{ accentColor: "#684FFF" }}
                  />
                  <div className="relative w-full">
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <span className="text-[12px] font-semibold text-[#FFFFFF] bg-[#684FFF] px-2 py-1 rounded">
                        {openRate}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col h-[100%] pt-6 pb-10 justify-between items-stretch bg-white rounded-lg p-4 shadow-md"
                  style={{ width: "100%" }}
                >
                  <label className="block text-[16px] text-black-500 font-medium mb-1">
                    Spam Protection
                  </label>
                  <label className="block text-[#6B7280] font-medium text-[12px] mb-1">
                    How many of your warm up emails to save from spam folder
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={spamProtection}
                    onChange={handleSpamProtectionChange}
                       className="w-full mt-8"
                    style={{ accentColor: "#684FFF" }}
                  />
                  <div className="relative w-full">
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <span className="text-[12px] font-semibold text-[#FFFFFF] bg-[#684FFF] px-2 py-1 rounded">
                        {spamProtection}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col pt-6 pb-10 justify-between h-[100%] items-stretch bg-white rounded-lg p-4 shadow-md"
                  style={{ width: "100%" }}
                >
                  <label className="block text-[16px] font-medium mb-1">
                    Mark Important
                  </label>
                  <label className="block text-[12px] text-[#6B7280] font-medium mb-1">
                    How many of your warm up emails to mark as important
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={markImportant}
                    onChange={handleMarkImportantChange}
                       className="w-full mt-8"
                    style={{ accentColor: "#684FFF" }}
                  />
                  <div className="relative w-full">
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <span className="text-[12px] font-semibold text-[#FFFFFF] bg-[#684FFF] px-2 py-1 rounded">
                        {markImportant}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" pt-[3rem] pb-[2rem]">
        <hr />
      </div>
      <div className=" lg:px-[10rem] bg-white container mx-auto  rounded-lg pb-5">
        <button className="bg-[#684FFF] text-white px-12 py-3 float-end rounded-full text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default WarmupDashboard;
