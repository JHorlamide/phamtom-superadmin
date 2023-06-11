import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfLink }: { pdfLink: string }) => {
  return (
    <div>
      <Document file={pdfLink}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
