const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("pdf_text_2024.txt", pdfParser.getRawTextContent());
    console.log("Saved to pdf_text_2024.txt");
});

pdfParser.loadPDF("D:\\15. Github\\corporate-finance\\data\\PNJ\\Financial Report\\16b-20250328-PNJ-BCTC-nam-2024-da-duoc-kiem-toan-boi-PwC-Hop-nhat_Signed.pdf");
