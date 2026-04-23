// Shift a table away from the left margin by a set amount in a document.

// How do I indent a table from the left edge of the page in a document?

// Control the horizontal offset of a table from the page margin in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetTableInd(1440);
doc.Push(table);