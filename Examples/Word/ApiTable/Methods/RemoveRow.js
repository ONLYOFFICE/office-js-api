// Delete a row from a table in a document.

// Remove the row that contains a specified cell from a table in a document.

// Shorten a table by eliminating an unwanted row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 3 rows and 3 columns and remove the second row, so that the table has 2 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(1).GetCell(0);
table.RemoveRow(cell);
doc.Push(table);