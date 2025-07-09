// This example shows how to create and set the table row properties which will be applied to all the rows within a table which match the conditional formatting type.

// How to set table row properties to table style and set its height.

// Update the table style table row properties.

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