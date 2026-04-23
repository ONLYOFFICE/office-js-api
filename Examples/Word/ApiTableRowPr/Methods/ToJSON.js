// Export table row formatting settings to a JSON representation in a document.

// How do I save the formatting settings of a table row as reusable data in a document?

// Preserve row formatting by converting its properties to a JSON string in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
let json = tableRowPr.ToJSON();
let tableRowPrFromJSON = Api.FromJSON(json);
let classType = tableRowPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + classType);