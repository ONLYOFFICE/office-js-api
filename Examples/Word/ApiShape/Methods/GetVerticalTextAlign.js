// Read the vertical text alignment of a shape in a document.

// How do I find out whether shape text is aligned to the top, middle, or bottom in a document?

// Retrieve the current vertical alignment of a shape's inner content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVerticalTextAlign("center");
let verticalAlign = drawing.GetVerticalTextAlign();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.AddElement(0, paragraph);
