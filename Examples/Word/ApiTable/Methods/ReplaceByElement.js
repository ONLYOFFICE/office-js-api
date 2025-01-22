// This example replaces the current table with a paragraph.
let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.AddElement(0, table);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
table.SetStyle(tableStyle);
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was replaced with the current paragraph.");
table.ReplaceByElement(paragraph);