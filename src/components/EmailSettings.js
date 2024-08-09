import React from 'react';

const EmailSettings = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">
            Lorenzo Cracco (lorenzo.cracco@tecsavingenergy.org)
          </h2>
          <p className="text-xs text-gray-500">
            Started on Mar 23, 2024 | 4 months ago
          </p>
        </div>
        <button className="bg-purple-600 text-white py-1 px-4 rounded-full text-xs">
          Pause email account
        </button>
      </div>

      {/* Navigation */}
      <div className="flex mb-6">
        <button className="bg-purple-600 text-white py-1 px-4 rounded text-xs">
          Warm Up
        </button>
        <button className="bg-gray-200 text-gray-600 py-1 px-4 rounded text-xs ml-2">
          Email Setting
        </button>
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold">Warm Up Setting</span>
          <button className="bg-gray-200 text-gray-600 py-1 px-4 rounded">
            Disable
          </button>
          <button className="bg-purple-600 text-white py-1 px-4 rounded">
            Enable
          </button>
        </div>
      </div>

      {/* Sender Name */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Sender name</label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="First Name"
            defaultValue="Farhan"
          />
          <input
            type="text"
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="Last Name"
            defaultValue="Tahir"
          />
        </div>
      </div>

      {/* Signature */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Signature</label>
        <textarea
          className="w-full border rounded-lg p-3 text-sm"
          placeholder="Account Signature"
          rows="4"
        ></textarea>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Tags</label>
        <select className="w-full border rounded-lg p-2 text-sm mb-2">
          <option>Select Tags</option>
        </select>
        <div className="flex flex-wrap gap-2">
          {/* Example Tags */}
          <span className="bg-orange-100 text-orange-600 py-1 px-3 rounded-full text-xs">
            Warm Up - Ramp Up
          </span>
          <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs">
            Nouvi
          </span>
          {/* Add more tags as needed */}
        </div>
      </div>

      {/* Campaign Settings */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Campaign Settings</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1">
              Daily campaign limit
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 text-sm"
              placeholder="Daily sending limit"
              defaultValue="122"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">
              Minimum wait time
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 text-sm"
              placeholder="Minimum wait time"
              defaultValue="60"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Reply To</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 text-sm"
              placeholder="Reply"
            />
          </div>
        </div>
      </div>

      {/* Custom Tracking Domain */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Custom Tracking Domain</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Link Use custom tracking domain</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-xs font-semibold mb-1">
              Your tracking domain or subdomain:
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 text-sm"
              placeholder="https://www.primaryinbox.ai"
              defaultValue="https://www.primaryinbox.ai"
            />
          </div>
          <div className="flex items-center">
            <button className="bg-green-500 text-white py-2 px-4 rounded-full text-xs">
              Check Status
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-purple-600 text-white py-2 px-8 rounded-full text-xs">
          Save
        </button>
      </div>
    </div>
  );
};

export default EmailSettings;


