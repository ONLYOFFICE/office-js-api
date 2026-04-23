// Access the row formatting tied to a conditional table style in a document.

// How do I read and adjust row settings for a conditional style region in a document?

// Set the height of rows matched by a table style condition in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTableRowPr().SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);