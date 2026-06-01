// Align a table horizontally relative to the page margins in a document.

// How do I control the horizontal position of a table in a document?

// Center or reposition a table to match the desired page layout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally.");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetJc("center");
doc.Push(table);