// Set the height of a table row in a document.

// How do I control how tall a row appears within a table in a document?

// Fix a minimum or exact height for a row to ensure consistent spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to row #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);