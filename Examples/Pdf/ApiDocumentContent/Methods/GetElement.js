// This example shows how to get element.

// How to get an element from the content of a page shape.

// Find an element from the shape using its index.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
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
page.AddObject(shape);
