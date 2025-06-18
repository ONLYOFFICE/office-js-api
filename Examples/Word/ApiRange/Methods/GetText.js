// This example shows how to get a text from the specified range.

// How to get a raw text from the characters.

// Retrieve a text from the character collection.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("\tONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
let text = range.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t", "NewLineParagraph": true, "TableCellSeparator": "\t", "TableRowSeparator": "\r\n", "ParaSeparator": "\r\n"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified range: " + text);
doc.Push(paragraph);