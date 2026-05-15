// Base a custom table style on an existing style in a document.

// How do I build a new table style that inherits formatting from another style in a document?

// Reuse a built-in style as the foundation for a custom table style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);