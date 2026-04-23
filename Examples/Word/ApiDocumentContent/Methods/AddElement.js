// Insert a new paragraph at a specific position inside a shape in a document.

// How do I add a paragraph to a content container in a document?

// Replace the default content of a shape by clearing it and placing a custom paragraph inside in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);