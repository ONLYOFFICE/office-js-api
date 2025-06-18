// This example shows how to make search in table cell.

// Search the word from the row.

// How to find a word from the row and make it bold.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("text");
row.GetCell(1).GetContent().GetElement(0).AddText("text");
row.GetCell(2).GetContent().GetElement(0).AddText("text");
doc.Push(table);
let rowSearch = row.Search("tex", true);
rowSearch[1].SetBold("true");