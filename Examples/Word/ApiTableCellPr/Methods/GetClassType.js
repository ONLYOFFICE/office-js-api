// Find out the class type of a table cell properties object.

// How can I get the class type of a table cell properties?

// Get the class type of a table cell properties and display it in the document.

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