// This example sets the vertical alignment to the table.

// How to indicate the vertical alignment of the table cell.

// Align the content of the table as bottom.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table was added to the bottom of the page. Scroll down to see it."); 
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.SetWrappingStyle(false);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetVAlign("bottom");