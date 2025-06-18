// This example specifies the reference to the parent style which this style inherits from in the style hierarchy.

// How to get the specific style from the document and create table style based on it.

// Inherit bordered style of the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);