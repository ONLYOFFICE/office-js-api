// Add a border to the top side of a table cell in a document.

// How do I apply a border to the top edge of a table cell in a document?

// Style a table cell with a visible top-side border in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the top 4 point black border to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderTop("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);