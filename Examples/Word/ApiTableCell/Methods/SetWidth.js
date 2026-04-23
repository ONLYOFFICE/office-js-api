// Set the width of a table cell in a document.

// How do I define how wide a specific table cell should be in a document?

// Resize a table cell to an exact measurement to control column layout in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetWidth("twips", 2880);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("2 inches");
cell = table.GetRow(0).GetCell(1);
cell.SetWidth("twips", 1440);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("1 inch");
cell = table.GetRow(0).GetCell(2);
cell.SetWidth("twips", 4320);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("3 inches");
table.SetStyle(tableStyle);
doc.Push(table);