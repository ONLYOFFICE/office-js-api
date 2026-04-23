// Add a bullet to a paragraph in a presentation.

// How do I create a bulleted list in a presentation?

// Format paragraph text with a custom bullet character in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
slide.AddObject(shape);