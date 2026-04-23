// Set the spacing between cells of a table in a document.

// How do I control the gap between table cells in a document?

// Add breathing room between cells to improve table readability in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetCellSpacing(720);
doc.Push(table);