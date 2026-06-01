// Control where text sits vertically inside a table cell in a document.

// How do I align text to the top, center, or bottom of a table cell in a document?

// Position cell content at a specific vertical location within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = table.GetRow(0).GetCell(0);
cell.SetVerticalAlign("top");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align top");
cell = table.GetRow(0).GetCell(1);
cell.SetVerticalAlign("center");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align center");
cell = table.GetRow(0).GetCell(2);
cell.SetVerticalAlign("bottom");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);