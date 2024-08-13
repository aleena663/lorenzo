import React, { useState } from "react";
import BoldIcon from "./assets/bold.png";
import ItalicIcon from "./assets/italic.png";
import UnderlineIcon from "./assets/underline.png";
import LinkIcon from "./assets/link.png";
import EraserIcon from "./assets/eraser.png";
import DotsIcon from "./assets/dots.png";
import NumericIcon from "./assets/numeric.png";
import LeftrightIcon from "./assets/leftright.png";
import DisableIcon from "./assets/disable.png";
import EnableIcon from "./assets/enable.png";
import CheckboxIcon from "./assets/checkbox.png";
import PauseIcon from "./assets/pause.png";
import ContactIcon from "./assets/contact.png";
import CopyIcon from "./assets/copy.png";
import RampIcon from "./assets/ramp.png";
import WarmupIcon from "./assets/warmup.png";
import NouviIcon from "./assets/nouvi.png";
import WarmIcon from "./assets/warm.png";
import RemoveIcon from "./assets/remove.png";
import FaChevronDown from "./assets/FaChevronDown.png";
import UndoIcon from "./assets/undo.png";
import RedoIcon from "./assets/redo.png";
import ReplyIcon from "./assets/reply.png";
import { Check } from "lucide-react";
const EmailSettings = () => {
  const [firstName, setFirstName] = useState("Farhan");
  const [lastName, setLastName] = useState("Tahir");
  const [signature, setSignature] = useState("");
  const [campaignLimit, setCampaignLimit] = useState(122);
  const [waitTime, setWaitTime] = useState(60);
  const [replyTo, setReplyTo] = useState("");
  const [trackingDomain, setTrackingDomain] = useState("https://www.primaryinbox.ai");
  const [useCustomTracking, setUseCustomTracking] = useState(true);
  const [isTrackingDomainVisible, setIsTrackingDomainVisible] = useState(false);

  const toggleWeekdaysOnly = () => {
    setIsTrackingDomainVisible(!isTrackingDomainVisible);
  };

  const handleSave = () => {
    console.log({
      firstName,
      lastName,
      signature,
      campaignLimit,
      waitTime,
      replyTo,
      trackingDomain,
      useCustomTracking,
    });
  };

  const handleCheckStatus = () => {
    console.log("Checking status of:", trackingDomain);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  const handleIconClick = (iconName) => {
    alert(`${iconName} icon clicked`);
  };

  const toggleTrackingDomainVisibility = () => {
    setIsTrackingDomainVisible(!isTrackingDomainVisible);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-black-500">
            Lorenzo Cracco (lorenzo.cracco@tecsavingenergy.org)
          </h2>
          <p className="text-neutral-400">
            Started on Mar 23, 2024 | 4 months ago
          </p>
        </div>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full text-sm shadow-md flex items-center">
          <img src={PauseIcon} alt="Pause" className="inline mr-2 h-5 w-5" />{" "}
          Pause email account
        </button>
      </div>

      {/* Navigation */}
      <div className="flex mb-4">
        <div className="flex py-1 px-1 bg-white-500 rounded-md">
          <button className="bg-[#684FFF] text-white py-2 px-3 rounded text-xs">
            Warm Up
          </button>
          <button className="bg-[#FFF] text-[#9CA3AF] py-2 px-3 rounded text-xs">
            Email Setting
          </button>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <span className="mr-5 text-xs font-semibold text-black">
            Warm Up Setting
          </span>
          <div className="flex items-center bg-[#F2F0FF] rounded-full px-1 py-1">
            <button
              onClick={toggleWeekdaysOnly}
              className={`py-2 px-2 rounded flex items-center text-xs ${
                !isTrackingDomainVisible
                  ? "bg-white text-[#9A9CBC]"
                  : "bg-[#F2F0FF] text-[#9A9CBC]"
              }`}
            >
              <img src={DisableIcon} alt="Disable" className="w-4 h-4 mr-1" />{" "}
              Disable
            </button>
            <button
              onClick={toggleWeekdaysOnly}
              className={`py-2 px-2 rounded flex items-center text-xs ${
                isTrackingDomainVisible
                  ? "bg-[#684FFF] text-white"
                  : "bg-[#F2F0FF] text-[#9A9CBC]"
              }`}
            >
              <img src={EnableIcon} alt="Enable" className="w-4 h-4 mr-1" />{" "}
              Enable
            </button>
          </div>
        </div>
      </div>

      {/* Sender Name */}
      <div className="mb-6">
        <label className="block font-bold text-1xl text-black-500 mb-2">
          Sender name
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-neutral-400 mb-1">First Name</label>
            <div className="relative">
              <img
                src={ContactIcon}
                alt="User"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <input
                type="text"
                className="w-full border rounded-full p-3 pl-10 text-xs text-[#242536]"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-neutral-400 mb-1">Last Name</label>
            <div className="relative">
              <img
                src={ContactIcon}
                alt="User"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <input
                type="text"
                className="w-full border rounded-full p-3 pl-10 text-sm text-[#242536]"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="mb-4">
        <label className="block text-md font-bold text-black-500 mb-2">
          Signature
        </label>

        <div
          className="bg-white rounded-lg shadow-md"
          style={{ height: "8.75rem" }}
        >
          <div className="ml-3">
            <textarea
              className="w-full bg-transparent focus:outline-none text-sm text-neutral-400 p-2"
              placeholder="Account Signature"
              rows="4"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            ></textarea>
          </div>
          <div
            className="mx-auto w-fit mb-2 text-black-500"
            style={{
              display: "flex",
              padding: "0.5rem",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "1.375rem",
              opacity: "var(--sds-size-stroke-border)",
              background: "var(--White-500, #FFF)",
              boxShadow:
                "0px 1px 2px 0px rgba(0, 0, 0, 0.01), 0px 1px 3px 1px rgba(0, 0, 0, 0.08)",
            }}
          >
            <button onClick={() => handleIconClick("Undo")}>
              <img
                src={UndoIcon}
                alt="Undo"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Redo")}>
              <img
                src={RedoIcon}
                alt="Redo"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Bold")}>
              <img
                src={BoldIcon}
                alt="Bold"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Italic")}>
              <img
                src={ItalicIcon}
                alt="Italic"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Underline")}>
              <img
                src={UnderlineIcon}
                alt="Underline"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Strikethrough")}>
              <img
                src={DotsIcon}
                alt="Strikethrough"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Numbered List")}>
              <img
                src={NumericIcon}
                alt="Numbered List"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Eraser")}>
              <img
                src={EraserIcon}
                alt="Eraser"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Link")}>
              <img
                src={LinkIcon}
                alt="Link"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
            <button onClick={() => handleIconClick("Bulleted List")}>
              <img
                src={LeftrightIcon}
                alt="Bulleted List"
                className="h-5 w-5 cursor-pointer text-black-500"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <label className="block text-md font-bold text-black-500 mb-2">
          Tags
        </label>
        <img
          src={FaChevronDown}
          alt="FaChevronDown"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
        <select className="w-full border rounded-lg p-3 text-sm mb-2 text-neutral-400">
          <option>Select Tags</option>
        </select>
        <div
          className="flex flex-wrap gap-2 mt-4"
          style={{
            gap: "1rem",
          }}
        >
          <span
            className="bg-white-500 py-1 px-3 rounded-full flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={RampIcon} alt="Ramp" className="h-3 w-3 mr-2" />
            Warm Up - Ramp Up
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
          <span
            className="bg-white-500 text-[#242536] py-1 px-3 rounded-full text-sm flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={NouviIcon} alt="Nouvi" className="h-3 w-3 mr-2" />
            Nouvi
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
          <span
            className="bg-white-500 text-[#242536] py-1 px-3 rounded-full text-sm flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={WarmupIcon} alt="Warm up" className="h-3 w-3 mr-2" />
            Warm up - Attivo
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
          <span
            className="bg-white-500 text-[#242536] py-1 px-3 rounded-full text-sm flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={NouviIcon} alt="Nouvi" className="h-3 w-3 mr-2" />
            Nouvi
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
          <span
            className="bg-white-500 text-[#242536] py-1 px-3 rounded-full text-sm flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={WarmIcon} alt="Warm" className="h-3 w-3 mr-2" />
            Warm
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
          <span
            className="bg-white-500 text-[#242536] py-1 px-3 rounded-full text-sm flex items-center"
            style={{
              padding: "0.25rem",
              gap: "0.5rem",
              borderRadius: "1.25rem",
              boxShadow: "1px 10px 25px 0px rgba(3, 2, 41, 0.07)",
            }}
          >
            <img src={WarmupIcon} alt="Warm-up" className="h-3 w-3 mr-2" />
            Warm-up
            <img
              src={RemoveIcon}
              alt="Remove"
              className="h-4 w-4 ml-2 bg-red-500 rounded-full cursor-pointer"
            />
          </span>
        </div>
      </div>

      {/* Campaign Settings */}
      <div className="mb-6">
        <h3 className="text-1xl font-bold text-black-500 mb-2">
          Campaign Settings
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Daily campaign limit
            </label>
            <div className="text-neutral-400 text-sm mb-2">
              Daily sending limit
            </div>
            <div className="flex items-center relative">
              <input
                type="number"
                className="w-full border rounded-full p-3 text-sm text-[#242536]"
                placeholder="Daily sending limit"
                value={campaignLimit}
                onChange={(e) => setCampaignLimit(e.target.value)}
              />
              <span className="ml-2 text-neutral-400 absolute right-3">Emails</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#242536] mb-1">
              Minimum wait time
            </label>
            <div className="text-neutral-400 mb-2">
              When used with multiple campaigns
            </div>
            <div className="flex items-center rounded-full relative">
              <input
                type="number"
                className="w-full border rounded-full p-3 text-sm text-gray-700"
                placeholder="Minimum wait time"
                value={waitTime}
                onChange={(e) => setWaitTime(e.target.value)}
              />
              <span className="ml-2 text-neutral-400 absolute right-3">
                Minutes
              </span>
            </div>
          </div>
          <div className="mt-5 ">
            <label className="block text-sm text-neutral-400 rounded-full mb-1">
              Reply To
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded-full p-3 mt-2 text-sm text-[#242536] pl-10"
                placeholder="Reply"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
              />
              <img
                src={ReplyIcon} // Assuming you have this icon
                alt="Reply"
                className="absolute left-2 mt-1 top-1/2  transform -translate-y-1/2 h-6 w-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Tracking Domain */}
      <div className="mb-6 flex" style={{ padding: "1rem 0", gap: "5.0625rem", alignItems: "center" }}>
        <div className="flex-grow">
          <h3 className="text-md font-bold text-black-500 mb-3">
            Custom Tracking Domain
          </h3>
          <div className="px-4 py-4 bg-gray-50 flex justify-between items-center" 
               style={{
                 display: 'flex',
                 padding: 'var(--Padding-Navbar, 1.5rem) 0.75rem',
                 alignItems: 'center',
                 gap: '0.75rem',
                 alignSelf: 'stretch',
                 borderRadius: '1rem',
                 opacity: 'var(--sds-size-stroke-border)',
                 background: 'var(--White-500, #FFF)',
                 boxShadow: '1px 10px 25px 0px rgba(3, 2, 41, 0.07)'
               }}>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 hidden"
                checked={useCustomTracking}
                onChange={(e) => setUseCustomTracking(e.target.checked)}
              />
              <CustomCheckbox 
              checked={useCustomTracking}
              label=' Link Use custom tracking domain '
              onChange={(e) => setUseCustomTracking(e.target.checked)}

              />
              {/* <img src={CheckboxIcon} alt="Checkbox" className="h-4 w-4 bg-[#684FFF] rounded-full" /> */}
              <span className="text-sm text-[#6B7280] ml-2">
                Link Use custom tracking domain 
              </span>
            </div>
            <img
              src={FaChevronDown}
              alt="FaChevrondown"
              className="h-5 w-5 text-blue-500"
            />
          </div>
          <div className="text-[#242536] mt-3 font-semibold">
            Add a new CNAME record for your tracking domain or subdomain.
          </div>
          <label className="block text-sm text-neutral-400 mb-3 mt-4">
            Your tracking domain or subdomain:
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-full p-3 text-sm text-neutral-500"
              placeholder="https://www.primaryinbox.ai"
              value={trackingDomain}
              onChange={(e) => setTrackingDomain(e.target.value)}
            />
          </div>
         
          <button
            className="bg-white-500 text-green-500 py-2 px-4 rounded-full text-sm shadow-md mt-4"
            style={{
              borderRadius: "3.75rem",
              border: "2px solid var(--Green-500, #05BD73)",
              opacity: "var(--sds-size-stroke-border)",
            }}
            onClick={handleCheckStatus}
          >
            Check Status
          </button>
        </div>

        {/* Record Box */}
        <div className="bg-[#F2F0FF] mb-4 rounded-lg shadow-md ml-3 h-fit my-auto p-2">
          <div className="flex-col w-full flex justify-between gap-4 h-[100%] mb-4">
            <div>
              <span className="text-neutral-400 text-sm">Record Type</span>
              <span className="text-[#242536] ml-2 font-semibold">CName</span>
            </div>
            <div>
              <span className="text-neutral-400 text-sm">Host</span>
              <span className="text-[#242536] ml-2 font-semibold">inst</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 text-sm">Value</span>
              <span className="text-[#242536] font-semibold">
                prox.itrackly.com
              </span>
              <button onClick={() => handleCopy("prox.itrackly.com")}>
                <img src={CopyIcon} alt="Copy" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-[3rem] pb-[2rem]">
        <hr />
      </div>
      <div className="lg:px-[10rem] bg-white container mx-auto mr-2 rounded-lg pb-5">
        <button className="bg-[#684FFF] text-white px-12 py-3 float-end rounded-full mr-2 text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default EmailSettings;




const CustomCheckbox = ({ checked, onChange, label }) => (
  <label className="flex items-center">
    <div className="relative">
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={checked}
        onChange={onChange}
      />
      <div 
        className={`w-6 h-6 border-2 rounded-full transition-colors duration-200 ease-in-out ${
          checked 
            ? 'bg-[#684FFF] border-blue-500' 
            : 'bg-[#F3F4F6] border-gray-300'
        }`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center transition-colors duration-200 ease-in-out">
        <Check size={16} color={checked ? 'white' : '#9CA3AF'} />
      </div>
    </div>
    <span className="ml-2">{label}</span>
  </label>
);