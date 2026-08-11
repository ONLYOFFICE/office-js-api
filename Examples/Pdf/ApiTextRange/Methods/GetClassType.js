// Get the class type of an ApiTextRange object and display it in a PDF shape.

// Useful for confirming the object type before calling range-specific methods.

// Retrieve the class type and insert it into the paragraph.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();
const classType = range.GetClassType();
paragraph.AddText(" Class type: " + classType);
page.AddObject(shape);
