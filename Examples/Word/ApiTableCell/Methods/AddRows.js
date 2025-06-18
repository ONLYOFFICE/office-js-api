// This example adds the new rows to the table.

// Insert new rows after the current cell.

// Get the cell, add the text to it and add rows after it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.GetCell(0, 0).AddRows(2, false);