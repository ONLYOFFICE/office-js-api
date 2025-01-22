// This example converts the ApiTableStylePr object into the JSON object.
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