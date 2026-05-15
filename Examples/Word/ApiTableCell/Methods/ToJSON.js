// Export a table cell's properties as a JSON string in a document.

// How do I serialize a table cell into a JSON representation in a document?

// Save the full configuration of a table cell as plain text data in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetTableBorderTop("single", 32, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableBorderRight("single", 32, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 32, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
table.SetWidth("percent", 100);
let cell = table.GetCell(0, 0);
let json = cell.ToJSON();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiTableCell object in the JSON format: ").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(json);
doc.Push(paragraph);