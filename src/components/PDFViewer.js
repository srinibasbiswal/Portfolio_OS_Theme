import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import {Person} from '../components/dataComponents/dataSet';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function PDFViewer(props){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
 
function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
}
 
    return (
        <div>          
            <Document
                file={Person.resumePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                className={` flex-column d-flex`}
            >
                <div className={`mx-auto mt-2`} >
                  	<Button href={Person.resumePDF} className={`btn-primary`} target='_blank'>Download Resume</Button>
                </div>
            <Page 
				pageNumber={pageNumber}
						 
				className={`mt-2 mx-auto ${styles.PDFPage}`} 
            />
          </Document>
          
        </div>
    );

}

export default PDFViewer;