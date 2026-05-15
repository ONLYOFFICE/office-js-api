// Export a table row to a portable JSON representation in a document.

// How do I serialize a table row into a storable format in a document?

// Capture the full structure of a table row as a JSON string in a document.

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
let row = table.GetRow(1);
let json = row.ToJSON();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiTableRow object in the JSON format: ").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(json);
doc.Push(paragraph);