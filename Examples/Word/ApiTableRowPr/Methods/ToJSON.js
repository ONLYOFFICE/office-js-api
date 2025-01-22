// This example converts the ApiTableRowPr object into the JSON object.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
document.Push(table);
let json = tableRowPr.ToJSON();
let tableRowPrFromJSON = Api.FromJSON(json);
let classType = tableRowPrFromJSON.GetClassType();
let paragraph = document.GetElement(0);
paragraph.AddText("Class type = " + classType);