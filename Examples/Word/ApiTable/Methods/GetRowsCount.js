// This example shows how to get a number of rows in the table.

// How to count the number of rows of the table and display it in the document.

// Add text showing the rows count of two tables.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRowsNumber = table.GetRowsCount();
table.AddRow(table.GetRow(1).GetCell(0), true);
let tableRowsNumber1 = table.GetRowsCount();
doc.Push(table);
paragraph = Api.CreateParagraph();
paragraph.AddText("The table above had " + tableRowsNumber + " rows before we added a new one. ");
paragraph.AddText("Now this table has " + tableRowsNumber1 + " rows.");
doc.Push(paragraph);