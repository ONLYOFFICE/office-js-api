// Add horizontal borders between interior rows of a table in a document.

// How do I draw lines between rows inside a table without affecting its outer edges in a document?

// Separate inner rows visually by applying borders only to the horizontal dividers between them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the inside horizontal 4 point orange borders:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
doc.Push(table);