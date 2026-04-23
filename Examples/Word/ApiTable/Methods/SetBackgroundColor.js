// Apply a background color to all cells of a table in a document.

// How do I change the background color of a table in a document?

// Give a table a distinct fill color to improve visual clarity in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);