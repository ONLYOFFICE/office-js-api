// Get the class type of a table row properties object in a PDF.

// How do I check that an object is a table row properties object in a PDF?

// Create empty row properties and display their class type in a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const rowPr = Api.CreateTableRowPr();
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
