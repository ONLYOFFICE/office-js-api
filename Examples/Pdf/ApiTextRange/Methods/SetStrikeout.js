// Apply single strikeout formatting to all runs within a text range.

// Useful for visually marking text as deleted while keeping it in place.

// Apply single strikeout to the entire text range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be struck out using the text range API.");
page.AddObject(shape);

const range = shape.GetTextRange();
range.SetStrikeout(true);
