// Search for specific text inside a table cell in a document.

// How do I find a particular word within a table cell in a document?

// Locate matching text in a cell and apply formatting to the results in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
doc.Push(table);
let searchResults = table.GetCell(0, 0).Search("Cell");
searchResults[1].SetBold(true);