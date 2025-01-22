// This example shows how to get a set of the text run properties which will be applied to all the text runs within the table which match the conditional formatting type.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTextPr().SetBold(true);
paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("Bold text");
paragraph = table.GetRow(0).GetCell(1).GetContent().GetElement(0);
paragraph.AddText("Normal text");
table.SetStyle(tableStyle);
document.Push(table);