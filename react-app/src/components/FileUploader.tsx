// src/components/FileUploader.jsx

import * as React from "react";

interface FileUploaderProps {
  onFileLoad: (fileContent: string) => void; // 정확한 함수 타입 정의
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileLoad }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          onFileLoad(reader.result.toString());
        }
      };
      reader.readAsText(file); // DXF 파일은 텍스트로 읽음
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".dwf,.json"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '20px 0' }}
      />
    </div>
  );
};

export default FileUploader;
