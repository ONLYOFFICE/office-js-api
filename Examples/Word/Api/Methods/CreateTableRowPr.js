// Set a fixed height for all rows in a table in a document.

// How do I control the row height of a table in a document?

// Apply uniform row height to every row of a table using a custom style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
let tableRowPr = Api.CreateTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
tableStylePr.SetTableRowPr(tableRowPr);

table.SetStyle(tableStyle);
doc.Push(table);