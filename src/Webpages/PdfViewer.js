
import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';


function PdfViewer() {
  return (
    <div className="App">
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
    <div id="pdfviewer">
      <Viewer fileUrl="https://cors-anywhere.herokuapp.com/https://onlinejudge.org/external/1/p100.pdf" />
    </div>
</Worker>
    </div>
  );
}

export default PdfViewer;