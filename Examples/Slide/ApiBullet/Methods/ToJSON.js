// Convert a bullet to its JSON representation in a presentation.

// ToJSON serializes an ApiBullet created with Api.CreateBullet so it can be stored or transferred.

// Create a character bullet, apply it to a paragraph, and write its JSON string into the shape.

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
paragraph.AddText(" Bulleted paragraph.");
const json = bullet.ToJSON();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("Bullet JSON: " + json);
docContent.Push(newParagraph);
slide.AddObject(shape);
