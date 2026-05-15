// Mark a table row to repeat at the top of every page when a table spans multiple pages in a document.

// How do I designate a row as a repeating header so it appears on every page in a document?

// Pin a row as the table header so readers always see column labels regardless of page breaks in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 90x3 table and set row #1 as the table header:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(90, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetTableHeader(true);
let cell = tableRow.GetCell(0);
table.Cells[0][0].GetContent().AddText("Header cell #1");
table.Cells[0][1].GetContent().AddText("Header cell #2");
table.Cells[0][2].GetContent().AddText("Header cell #3");
table.SetStyle(tableStyle);
doc.Push(table);