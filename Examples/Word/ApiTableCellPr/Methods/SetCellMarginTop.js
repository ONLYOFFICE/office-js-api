// Set the spacing between the cell content and the top edge of a table cell in a document.

// How do I control the gap between text and the top border of a table cell in a document?

// Push cell content away from the top boundary of a table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the top margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginTop(720);
table.SetStyle(tableStyle);
doc.Push(table);