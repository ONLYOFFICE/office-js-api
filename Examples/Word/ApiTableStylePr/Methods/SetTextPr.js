// This example shows how to create and set text run properties which will be applied to all the text runs within the table which match the conditional formatting type.

// How to set text properties to the table style and make it bold.

// Update the table style text properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
tableStylePr.SetTextPr(textPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("Bold text");
paragraph = table.GetRow(0).GetCell(1).GetContent().GetElement(0);
paragraph.AddText("Normal text");

table.SetStyle(tableStyle);
doc.Push(table);