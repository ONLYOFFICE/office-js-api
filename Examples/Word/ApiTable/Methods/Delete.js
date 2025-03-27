// This example deletes the table.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.Delete();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was removed from the document.");
doc.Push(paragraph);