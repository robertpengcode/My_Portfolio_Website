import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { makeStyles } from "@material-ui/core/styles";
import resume from "./resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles(theme => ({
  pdf: {
    width: "100%",
    height: "100%"
  }
}));

const MyPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const classes = useStyles();
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.pdf}>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default MyPdf;
