// Retrieve the class type of a table row in a document.

// How to identify the class type of a table row in a document?

// Obtain the class type identifier of a table row object in a document.

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