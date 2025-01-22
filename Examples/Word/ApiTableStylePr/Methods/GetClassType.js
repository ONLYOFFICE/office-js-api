// This example gets a class type and pastes it into the presentation.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle();
table.SetStyle(tableStyle);
document.Push(table);
let classType = tableStylePr.GetClassType();
let paragraph = document.GetElement(0);
paragraph.AddText("Class Type = " + classType);