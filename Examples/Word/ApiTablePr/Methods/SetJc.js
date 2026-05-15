// Position a table horizontally within the page margins in a document.

// How do I align a table to the center or sides of the page in a document?

// Place a table at a specific horizontal position relative to the surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
tablePr.SetJc("center");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);