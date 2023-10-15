
const fs = require('fs') ;
// FIXME: Incase you have the npm package
const HTMLtoDOCX= require('html-to-docx');
//import HTMLtoDOCX from '../dist/html-to-docx.esm';

const filePath = './example.docx';

const htmlString = ``;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();