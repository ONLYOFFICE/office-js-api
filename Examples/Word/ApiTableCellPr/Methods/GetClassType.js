// Retrieve the class type of a table cell properties in a document.

// How to identify the class type of a table cell properties?

// Obtain the class type identifier of a table cell properties object.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableCellPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);