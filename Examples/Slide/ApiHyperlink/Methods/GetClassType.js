// This example shows how to get a class type of a hyperlink.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#456789'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const hyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
shape.SetHyperlink(hyperlink);
const classType = hyperlink.GetClassType();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Class Type of ApiHyperlink instance is \"' + classType + '\".');
