import React, { useState } from 'react';
import './Reports.css';

// Sample PDF Data
const pdfs = [
  {
    title: 'Annual Report 2023',
    src: 'pdf1.pdf',
  },
  {
    title: 'Quarterly Financials',
    src: 'pdf2.pdf',
  },
  {
    title: 'Project Overview',
    src: 'pdf3.pdf',
  },
  {
    title: 'Research Paper',
    src: 'pdf4.pdf',
  },
  {
    title: 'Market Analysis',
    src: 'pdf1.pdf',
  },
  {
    title: 'User Feedback',
    src: 'pdf2.pdf',
  },
  // Add more reports here
];

const Reports = () => {
    const [visibleReports, setVisibleReports] = useState(4);
    const [expandedReport, setExpandedReport] = useState(null);
  
    const handleLoadMore = () => {
      setVisibleReports(prev => prev + 4);
    };
  
    const handleReportClick = (report) => {
      setExpandedReport(report);
    };
  
    const handleClosePopup = () => {
      setExpandedReport(null);
    };
  
    return (
      <div className="reports-container">
        <h1 className="reports-heading">Reports</h1>
        <div className="reports-grid">
          {pdfs.slice(0, visibleReports).map((pdf, index) => (
            <div 
              key={index} 
              className="report-card"
              onClick={() => handleReportClick(pdf)}
            >
              <h2 className="report-title">{pdf.title}</h2>
              <iframe 
                src={pdf.src} 
                className="report-pdf" 
                title={pdf.title}
              ></iframe>
            </div>
          ))}
        </div>
        {visibleReports < pdfs.length && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {expandedReport && (
          <div className="report-popup">
            <div className="popup-content">
              <button className="close-popup" onClick={handleClosePopup}>Close</button>
              <h2 className="popup-title">{expandedReport.title}</h2>
              <iframe 
                src={expandedReport.src} 
                className="report-popup-pdf"
                title={expandedReport.title}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Reports;