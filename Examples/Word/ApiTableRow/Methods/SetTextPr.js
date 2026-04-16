// Set the text properties to the current row in a document.

// Make the row text bold in a document.

// How to apply new text properties to the table row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.SetTextPr(textPr);
doc.Push(table);