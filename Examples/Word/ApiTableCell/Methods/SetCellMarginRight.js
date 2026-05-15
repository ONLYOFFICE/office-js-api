// Set the spacing between the cell content and its right edge in a document.

// How do I add padding to the right side of text inside a table cell in a document?

// Push the content away from the right border by controlling the inner gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginRight(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
table.SetStyle(tableStyle);
doc.Push(table);