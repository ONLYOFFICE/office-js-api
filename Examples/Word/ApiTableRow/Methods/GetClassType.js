// Identify the object type of a table row in a document.

// How do I confirm that an object represents a table row rather than another element in a document?

// Read the type label of a table row to distinguish it from other document objects in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRow.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);