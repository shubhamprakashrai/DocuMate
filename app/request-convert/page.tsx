'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';

type FeatureType = 'Convert' | 'OCR' | 'Extract Text' | 'Summarize';

const featureOptions: { [key in FeatureType]: { label: string; formats: string[] } } = {
  'Convert': { label: 'Convert Files', formats: ['PDF', 'DOCX', 'DOC', 'TXT', 'JPG', 'PNG'] },
  'OCR': { label: 'OCR - Extract Text from Images/PDF', formats: ['PDF', 'JPG', 'PNG'] },
  'Extract Text': { label: 'Extract Text from PDF', formats: ['PDF'] },
  'Summarize': { label: 'Summarize Document', formats: ['PDF', 'DOCX', 'TXT'] },
};

// Type guard to check if a string is a valid FeatureType
const isFeatureType = (value: string): value is FeatureType => {
  return value in featureOptions;
};

export default function RequestConvert() {
  const searchParams = useSearchParams();
  const featureParam = searchParams.get('feature') || 'Convert';
  const initialFeature: FeatureType = isFeatureType(featureParam) ? featureParam : 'Convert';
  const [selectedFeature, setSelectedFeature] = useState<FeatureType>(initialFeature);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [outputFormat, setOutputFormat] = useState<string>(featureOptions[selectedFeature].formats[0]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConvert = () => {
    if (files.length === 0) {
      alert('Please select at least one file!');
      return;
    }
    console.log('Feature:', selectedFeature);
    console.log('Files:', files);
    console.log('Output Format:', outputFormat);
    // TODO: Implement actual conversion, OCR, extract, summarize logic
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{featureOptions[selectedFeature].label}</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Upload your file(s) below and choose your desired action.
      </p>

      {/* Feature Selector */}
      <div className="mb-6 flex space-x-2 max-w-md w-full justify-center flex-wrap">
        {(Object.keys(featureOptions) as FeatureType[]).map((feat) => (
          <button
            key={feat}
            className={`px-4 py-2 rounded-lg font-medium border ${
              selectedFeature === feat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => {
              setSelectedFeature(feat);
              setOutputFormat(featureOptions[feat].formats[0]);
              setFiles([]);
            }}
          >
            {feat}
          </button>
        ))}
      </div>

      {/* Drag & Drop Area */}
      <div
        className={`w-full max-w-md border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-500">
          {files.length > 0
            ? `Selected ${files.length} file(s)`
            : 'Drag & drop files here or click to browse'}
        </p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
      </div>

      {/* File Preview */}
      {files.length > 0 && (
        <div className="mt-4 w-full max-w-md flex flex-col gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
            >
              <span className="truncate">{file.name}</span>
              <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Format Selection */}
      {selectedFeature === 'Convert' && (
        <div className="mt-6 w-full max-w-md flex justify-between items-center">
          <label className="text-gray-700 font-medium mr-2">Convert to:</label>
          <select
            className="flex-1 border rounded-lg p-2"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
          >
            {featureOptions[selectedFeature].formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Convert / Execute Button */}
      <button
        onClick={handleConvert}
        className="mt-6 w-full max-w-md px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all flex items-center justify-center"
      >
        <FiUpload className="mr-2" /> {selectedFeature}
      </button>

      {/* Security Notice */}
      <div className="mt-4 text-gray-400 text-sm flex justify-center items-center space-x-1">
        <FaLock /> <span>Secure & Private - Files auto-delete in 1 hour</span>
      </div>
    </div>
  );
}
