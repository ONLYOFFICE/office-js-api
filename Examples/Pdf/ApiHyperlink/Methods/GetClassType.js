// This example shows how to get a class type of a hyperlink.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#456789'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
page.AddObject(shape);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
const hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
const classType = hyperlink.GetClassType();

paragraph = Api.CreateParagraph();
paragraph.AddText('Class Type of ApiHyperlink instance is \"' + classType + '\".');
docContent.Push(paragraph);
