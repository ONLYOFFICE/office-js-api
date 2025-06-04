// This example gets a class type and pastes it into the presentation.

// How to get a class type of ApiTableCell.

// Retrieve class type of ApiTableCell object and insert it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Cell #1");
table.SetStyle(tableStyle);
doc.Push(table);
let classType = cell.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);