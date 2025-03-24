// This example specifies the indentation which will be added before the leading edge of the table in the document.

// How to set the indentation of the table.

// Create a table and resize its indent.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetTableInd(1440);
doc.Push(table);