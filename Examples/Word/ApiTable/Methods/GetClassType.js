// Retrieve the class type of a table in a document.

// How to identify the class type of a table in a document?

// Obtain the class type identifier of a table object in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = table.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);