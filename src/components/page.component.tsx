import React,{ useEffect, useState} from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  available_fields_data,
  character_ecoding,
  delimiter,
  file_type,
} from "../util/constants";

const Page: any = () => {
  const [file, setFile] = useState<any>("No file chosen");
  const [data, setData] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState("");

  const [selectedFields, setSelectedFields] = useState<any>([]);
  const [available_fields, setAvailableFields] = useState<any>([]);

  useEffect(() => {
    setAvailableFields(available_fields_data);
  }, []);

  const handleSelectChange = (event: any) => {
    if (event.target.value === "") {
      setSelectedItem("");
      return;
    }

    setSelectedItem(event.target.value);
  };

  const handleAdd = (event: any) => {
    console.log("add");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  async function onDropFunc(acceptedFiles: any) {
    console.log(acceptedFiles[0].name);
     if (
      acceptedFiles[0].name.split(".")[1] !== "csv" &&
      acceptedFiles[0].name.split(".")[1] !== "json"
    ) {
      toast.error("Invalid File Type");
      return;
    }

    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(event.target.result);
        console.log("JSON Data:", jsonData);
        setData(jsonData["products"]);

        // Now you have access to the data from the JSON file
        // You can set it in the component state or perform any other actions
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    // Read the file as text
    reader.readAsText(file);


    setFile(acceptedFiles[0].name);
 
  }

  return (
    <>
      <div className="bg-slate-200 h-screen w-screen flex">
        <div className="m-8 w-full">
          <div>Import Products</div>
          <div className="h-2"></div>
          <div className="h-full w-full bg-slate-300 flex flex-col">
            <div className="w-full h-2/5 flex">
              <div className="w-1/2 h-full flex bg-white">
                <div className="w-16 h-1/2 m-3 content-end">Step 1 :</div>
                <div className="w-full h-1/2">
                  <div className="w-full h-1/3 flex justify-start items-center">
                    Select File
                  </div>
                  <div className="w-full h-1/3">
                    <div className="w-1/2 h-full flex">
                      <div>
                        <Dropzone onDrop={onDropFunc}>
                          {({ getRootProps, getInputProps }) => (
                            <section className="w-full h-full rounded-lg flex flex-col items-start justify-center 1">
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className="text-center mb-4">
                                  <div className="mt-1">
                                    <button className="bg-white-500 hover:bg-grey border-2 text-black font-bold py-1 px-2 rounded">
                                      Choose File
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      </div>
                      <div className="ml-5 mb-3 flex items-center justify-center">
                        {file}
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-1/3 flex items-center justify-start">
                    Supported File Type(s) : .CSV, JSON
                  </div>
                </div>
              </div>
               <div className="w-1/2 h-full bg-white ml-5 flex">
                <div className="w-16 h-full  flex justify-start pt-3 pl-2">
                  Step 2 :
                </div>
                <div className="w-3/4 h-full">
                  <div className="h-1/5 w-full flex items-center justify-start pb-2 pl-4">
                    Specify Format
                  </div>
                  <div className="h-1/5 w-full  flex">
                    <div className="h-full w-1/3  flex items-center pl-4">
                      File Type
                    </div>
                    <div className="h-full w-2/3 flex items-center justify-center">
                      <select
                        value={selectedItem}
                        onChange={handleSelectChange}
                        className="w-full p-2 mx-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                      >
                        <option value="">Select an option</option>{" "}
                        {file_type.map((item: any) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="h-1/5 w-full  flex">
                    <div className="h-full w-1/3  flex items-center pl-4">
                      Character Encoding
                    </div>
                    <div className="h-full w-2/3 flex items-center justify-center">
                      <select
                        value={selectedItem}
                        onChange={handleSelectChange}
                        className="w-full p-2 mx-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                      >
                        <option value="">Select an option</option>{" "}
                        {character_ecoding.map((item: any) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="h-1/5 w-full  flex">
                    <div className="h-full w-1/3  flex items-center pl-4">
                      Delimiter
                    </div>
                    <div className="h-full w-2/3 flex items-center justify-center">
                      <select
                        value={selectedItem}
                        onChange={handleSelectChange}
                        className="w-full p-2 mx-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                      >
                        <option value="">Select an option</option>{" "}
                        {delimiter.map((item: any) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="h-1/5 w-full  flex">
                    <div className="h-full w-1/3  flex items-center pl-4">
                      Has header
                    </div>
                    <div className="h-full w-2/3 flex items-center justify-start pl-2">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="w-full h-1/2 bg-white mt-4 flex">
              <div className="w-28 h-full m-3 flex">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="w-1"></div>
                Step 3 :
              </div>
              <div className="h-full w-1/2 bg-white flex flex-col">
                <div className="w-full h-16 flex items-center">
                  Display Handling
                </div>
                <div className="w-full h-16 flex items-center">
                  Select the fields to be displayed
                </div>
                <div className="w-full h-full flex">
                  <div className="w-1/3 h-full">
                    <div className="w-full h-16 flex items-center justify-center">
                      Available Fields
                    </div>
                    <div className="w-full h-3/4 bg-red-500 flex items-center justify-center">
                      Product Name
                    </div>
                  </div>
                  <div className="w-12 h-full flex flex-col items-center justify-center p-2">
                    <div className="w-full h-20"></div>
                    <button
                      className="w-full h-10 border-2"
                      onClick={handleAdd}
                    >
                      {">>"}
                    </button>
                    <div className="w-full h-20"></div>
                    <button
                      className="w-full h-10 border-2"
                      onClick={handleRemove}
                    >
                      {"<<"}
                    </button>
                  </div>
                  <div className="w-1/3 h-full ">
                    <div className="w-full h-16 flex items-center justify-center">
                      Fields to be Displayed
                    </div>
                    <div className="w-full h-3/4 bg-red-500 flex items-center justify-center">
                      Product Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-16 flex justify-end bg-slate-200">
              <div className="w-20 h-full flex justify-center items-center">
                <button className="w-32 h-10 bg-green-500 rounded-lg text-white">
                  Next
                </button>
              </div>
              <div className="w-20 h-full flex justify-center items-center mx-10">
                <button className="w-32 h-10 rounded-lg text-red-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;