// Identify the kind of object a style belongs to in a document.

// How do I find out what category a style object falls into in a document?

// Read and display the classification label assigned to a style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableStyle.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);