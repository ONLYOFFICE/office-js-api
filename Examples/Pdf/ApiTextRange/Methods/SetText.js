// Set new text content to a range, replacing the existing text.

// Useful for swapping out a shape's text without recreating the range.

// Replace the shape text with new content and verify the result.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Old text");
page.AddObject(shape);

const range = shape.GetTextRange();
range.SetText("New text");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 180 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("After SetText: " + JSON.stringify(range.GetText()));
page.AddObject(shape2);
