import React from "react";

const DownloadResumeBtn = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/AmmarShahab_Resume.pdf";
    link.download = "Ammar_Shahab_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      onClick={handleDownloadCv}
      className="text-white h-10 mt-3 bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 text-center dark:focus:ring-[#F7BE38]/50 "
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeBtn;
