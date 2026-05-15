// Wrap a table inside a content control in a document.

// How do I place a table inside a content control in a document?

// Protect table content by enclosing it in a reusable control in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let blockLvlSdt = table.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);