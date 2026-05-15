// Export the conditional table style settings as a portable data object in a document.

// How do I save the table style properties in a transferable format in a document?

// Serialize the table style configuration for later reuse or inspection in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle();
table.SetStyle(tableStyle);
doc.Push(table);
let json = tableStylePr.ToJSON();
let tableStylePrFromJSON = Api.FromJSON(json);
let type = tableStylePrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);