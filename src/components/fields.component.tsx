import React, { useState } from "react";

const FieldsComponent: React.FC = () => {
  const [availableFields, setAvailableFields] = useState<string[]>([
    "projectId",
    "price",
    "popularity",
  ]);
  const [displayedFields, setDisplayedFields] = useState<string[]>([]);

  const moveFieldToDisplayed = (field: string) => {
    setAvailableFields(availableFields.filter((f) => f !== field));
    setDisplayedFields([...displayedFields, field]);
  };

  const moveFieldToAvailable = (field: string) => {
    setDisplayedFields(displayedFields.filter((f) => f !== field));
    setAvailableFields([...availableFields, field]);
  };

  return (
    <div className="flex justify-center mt-8">
      {/* Available Fields Table */}
      <div className="border p-4 mr-4">
        <h2 className="text-lg font-semibold mb-2">Available Fields</h2>
        <ul className="space-y-2">
          {availableFields.map((field) => (
            <li
              key={field}
              onClick={() => moveFieldToDisplayed(field)}
              className="cursor-pointer hover:text-blue-500"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>

      {/* Displayed Fields Table */}
      <div className="border p-4">
        <h2 className="text-lg font-semibold mb-2">Fields to be Displayed</h2>
        <ul className="space-y-2">
          {displayedFields.map((field) => (
            <li
              key={field}
              onClick={() => moveFieldToAvailable(field)}
              className="cursor-pointer hover:text-blue-500"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FieldsComponent;