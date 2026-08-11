// Get the text content of a range and display it in a second shape.

// Useful for reading the text covered by a range without modifying it.

// Retrieve the text content of the range and show it on the PDF page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");
page.AddObject(shape);

const range = shape.GetTextRange();
const text = range.GetText();

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 180 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
const content2 = shape2.GetDocContent();
content2.GetElement(0).AddText("GetText result: " + JSON.stringify(text));
page.AddObject(shape2);
