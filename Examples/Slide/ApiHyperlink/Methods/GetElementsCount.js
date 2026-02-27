// This example returns a number of elements in the current hyperlink.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#D5C4A1'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run1 = Api.CreateRun();
run1.AddText('Api Document Builder.');
paragraph.AddElement(run1, 0);
const run2 = Api.CreateRun();
run2.AddText(' ONLYOFFICE for developers');
paragraph.AddElement(run2, 1);

const infoParagraph = Api.CreateParagraph();
let hyperlink;

hyperlink = paragraph.AddHyperlink('https://api.onlyoffice.com/docbuilder/basic');
infoParagraph.AddText('Text hyperlink elements count: ' + hyperlink.GetElementsCount());
infoParagraph.AddLineBreak();

shape.SetHyperlink(Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE website'));
hyperlink = shape.GetHyperlink();
infoParagraph.AddText('Shape hyperlink elements count: ' + hyperlink.GetElementsCount());

docContent.Push(infoParagraph);
slide.AddObject(shape);
