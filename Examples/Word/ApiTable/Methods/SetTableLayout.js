// This example specifies the algorithm which will be used to lay out the contents of the table within the document.

// How to set the table layout.

// Create a table and make its layout fixed.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetTableLayout("fixed");
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
table.SetStyle(tableStyle);
doc.Push(table);