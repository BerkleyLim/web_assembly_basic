import { useState } from "react";
import FileUploader from "../components/FileUploader";
import ThreeCanvas from "../components/ThreeCanvas";
import DxfParser from "dxf-parser";
import * as React from "react";

interface ModelEntity {
  type: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const Main: React.FC = () => {
  const [modelData, setModelData] = useState<ModelEntity[] | null>(null);
  const [fileContent] = useState<string | null>(null);


  const handleFileLoad = (fileContent: string) => {
    try {
      const parser = new DxfParser();
      const parsedData = parser.parseSync(fileContent);
      setModelData(parsedData.entities as ModelEntity[]); // 타입 캐스팅
    } catch (error) {
      console.error("Error parsing DXF file:", error);
    }
  };

  return (
    <div>
      <h1>DWG/DXF Viewer</h1>
      <FileUploader onFileLoad={handleFileLoad}/>
      <ThreeCanvas modelData={modelData}/>

      <h1>SAMPLE ASSEMBLY</h1>
      <div style={{whiteSpace: "pre-wrap", marginTop: "20px", fontSize: "14px"}}>
        {fileContent ? (
          <>
            <h2>File Content:</h2>
            <div>{fileContent}</div>
          </>
        ) : (
          <p>No file content available. Upload a file to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default Main;
