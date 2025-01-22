// This example shows how to get a set of the paragraph properties which will be applied to all the paragraphs within a table which match the conditional formatting type.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("firstRow");
table.SetTableLook(true, true, true, true, true, true);
let paraPr = tableStylePr.GetParaPr();
paraPr.SetJc("center");
paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center.");
table.SetStyle(tableStyle);
document.Push(table);