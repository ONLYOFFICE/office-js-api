// Read the descriptive text assigned to a table in a document.

// How do I retrieve the description that has been set on a table in a document?

// Display the stored description of a table as paragraph text in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + table.GetTableDescription());
doc.Push(table);