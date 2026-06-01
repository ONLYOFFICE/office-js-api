// Apply a background color to every cell in a table row in a document.

// How do I fill a table row with a specific background color in a document?

// Highlight an entire row by painting its cells with a chosen color in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);