// Check the class type returned by a hyperlink in a presentation.

// How do I check what type a hyperlink object is in a presentation?

// Retrieve and output the class type string for a hyperlink in a presentation.

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