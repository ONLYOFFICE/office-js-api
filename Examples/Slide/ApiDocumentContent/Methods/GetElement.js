// Access a specific paragraph by its position in a shape in a presentation.

// How do I retrieve a paragraph from a shape using its index number in a presentation?

// Get the first paragraph from a shape and format it with numbering in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const oBullet = Api.CreateNumbering("ArabicParenR", 1);

const docContent = shape.GetDocContent();
let oParagraph = docContent.GetElement(0);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");

oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(oParagraph);
slide.AddObject(shape);