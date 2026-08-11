// Set the vertical alignment of runs within a text range to superscript.

// Useful for creating superscript or subscript effects on part of text.

// Apply superscript vertical alignment to the entire text range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc");
page.AddObject(shape);

const range = shape.GetTextRange();
range.AddText("2", "after");

shape.GetTextRange().GetRange(4, 5).SetVertAlign("superscript");
