// Count the total number of rows in a table in a document.

// Track the size of a table as rows are added or removed in a document.

// Display the row count before and after adding a row to a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new row before the second one, so that the table has 3 rows:");
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