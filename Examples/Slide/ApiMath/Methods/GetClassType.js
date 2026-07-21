// Identify the object type of a math equation in a presentation.

// How do I find out what kind of object a formula is in a presentation?

// Confirm the category a math equation belongs to in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
const classType = math.GetClassType();

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Class Type = " + classType);
docContent.Push(paragraph2);
