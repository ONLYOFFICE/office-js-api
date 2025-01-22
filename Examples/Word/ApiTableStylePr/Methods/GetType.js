// This example shows how to get a type of the current table conditional style.
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetStyle(tableStyle);
doc.Push(table);
let tableStylePrType = tableStylePr.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStylePrType);