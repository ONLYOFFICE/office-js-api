// Access the content control that wraps a table in a document.

// How do I find the structured container holding a table in a document?

// Reach the enclosing content control so its properties can be updated in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = table.GetParentContentControl();
parentContentControl.SetAlias("№1");