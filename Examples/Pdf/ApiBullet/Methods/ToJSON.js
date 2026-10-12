// Convert a bullet to its JSON representation in a PDF.

// ToJSON serializes an ApiBullet created with Api.CreateBullet for storage or transfer.

// Create a character bullet, apply it to a paragraph, and write its JSON string into the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" Bulleted paragraph.");
const json = bullet.ToJSON();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("Bullet JSON: " + json);
docContent.Push(newParagraph);
page.AddObject(shape);
