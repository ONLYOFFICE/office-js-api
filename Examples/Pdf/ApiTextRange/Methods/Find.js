// Search for a word within a text range and return its sub-range.

// Useful for locating a substring and acting on its exact position.

// Find the word "World" in the shape text and display its start position.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
page.AddObject(shape);

const range = shape.GetTextRange();
const found = range.Find("World");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 180 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
const msg = "Found at pos " + found.GetStartPos() + ": " + found.GetText();
shape2.GetDocContent().GetElement(0).AddText(msg);
page.AddObject(shape2);
