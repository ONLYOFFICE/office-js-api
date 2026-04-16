// How to create new table with two rows and four columns in a PDF document.

// Add a table to the pdf document.

// Create the table using the PDF document API.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);