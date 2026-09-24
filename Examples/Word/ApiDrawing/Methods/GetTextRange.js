// Get the range covering the whole text of a shape and make it bold in a document.

// Creates a text body if the shape does not have one yet; returns null for drawings that are not shapes.

// Add a shape with text, get its text range, then apply bold formatting to it.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.GetContent().GetElement(0).AddText("ONLYOFFICE Document Builder");
const range = drawing.GetTextRange();
range.SetBold(true);
