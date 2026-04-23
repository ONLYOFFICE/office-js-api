// Count how many cells a table row contains in a document.

// How do I find out the total number of cells in a given row in a document?

// Read the cell count of a row to understand the column structure of a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
let cellsCount = tableRow.GetCellsCount();
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of cells in the first row = " + cellsCount);