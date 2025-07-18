// This example gets a class type and inserts it into the document.

// How to get a class type of ApiTable.

// Retrieve class type of ApiTable object and insert it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = table.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);