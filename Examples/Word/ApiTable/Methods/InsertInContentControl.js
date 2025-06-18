// This example wraps the current table object with a content control.

// How to add the table to the block level control.

// Create a table and then insert it to the another content control.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let blockLvlSdt = table.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);