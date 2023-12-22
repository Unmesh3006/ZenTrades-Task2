import React from "react";
import Dropzone from "react-dropzone";

const Page: any = () => {
  const [file, setFile] = React.useState<any>(null);

  async function onDropFunc(acceptedFiles: any) {
    console.log(acceptedFiles[0].name);
    setFile(acceptedFiles[0].name);
    console.log(file);
  }

  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex">
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
              <div className="w-1/2 h-full bg-yellow-500 ml-5"></div>
            </div>
            <div className="w-full h-1/2 bg-blue-500"></div>
            <div className="w-full h-1/6 bg-green-500"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;