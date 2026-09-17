// Raise the text of a range above the baseline in a shape on a PDF page.

// Superscript and subscript are both set through this method.

// Turn the trailing digit into a superscript.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc2");

const range = shape.GetTextRange();

range.GetRange(4, 5).SetVertAlign("superscript");