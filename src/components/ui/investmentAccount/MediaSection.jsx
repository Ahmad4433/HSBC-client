import React from "react";
import { downloadPdf } from "../../../assets/user/investmentAccount";

const MediaSection = () => {
  return (
    <>
      <div className="mediaSection">
        <div className="mediaSection-container">
          <div className="mediaSection-container-download">
            <h1>MEDIA & DOCUMENTS</h1>
            <p>
              You want to establish financial security and plan for possible
              future hauls. This fund allows you yo save money will be compltely
              safe and to benefit
            </p>
            <button>
              <img src={downloadPdf} alt="icon" />
              Download Pdf
            </button>
          </div>
          <div className="mediaSection-container-schudle">
            <h1>SCADULE OF YOUR </h1>
            <div>
              <div>
                <p>Date</p>
                <p>09-11-2023</p>
                <p>Total</p>
              </div>
              <div>
                <p>Date</p>
                <p>09-11-2023</p>
                <p>Total</p>
              </div>
              <div>
                <p>Date</p>
                <p>09-11-2023</p>
                <p>Total</p>
              </div>
              <div>
                <p>Date</p>
                <p>09-11-2023</p>
                <p>Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaSection;
