// filename.pdf from filename.html' and data-category

document.addEventListener('DOMContentLoaded', () => {
  const viewPdfButton = document.getElementById('viewPdfButton');

  viewPdfButton.addEventListener('click', function () {
    const pathName = window.location.pathname;
    const htmlName = pathName.replace(/^\/+/, "");
    const pdfName = htmlName.replace('html','pdf');
    // TODO: Create a full dynamic path - like moving thorugh file system  ../ 
    const pdfPath = `../pdf-files/${pdfName}`;
    window.open(pdfPath, '_blank');
  });
});