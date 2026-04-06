// This example sets the background color to all cells in the table.

// How to color a background of the table.

// Color background to the middle washed rose color.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);
