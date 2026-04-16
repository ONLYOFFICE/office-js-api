// Set a border for the entire table in a document.

// How can I set table border all using a table properties in a document?

// Set table border all for a table properties in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add 4 point black border for the entrire table:");
const tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
const tablePr = tableStyle.GetTablePr();
const table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderAll("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);