// This example sets the hyperlink address.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(245, 203, 167));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText('ONLYOFFICE Document Builder');
paragraph.AddElement(run);

const infoParagraph = Api.CreateParagraph();
let hyperlink;

hyperlink = paragraph.AddHyperlink('https://api.onlyoffice.com/docbuilder/basic');
hyperlink.SetLink('https://api.onlyoffice.com/');
infoParagraph.AddText('Text hyperlink updated link: ' + hyperlink.GetLinkedText());
infoParagraph.AddLineBreak();

shape.SetHyperlink(Api.CreateHyperlink('https://api.onlyoffice.com/docbuilder/basic', 'DocBuilder'));
hyperlink = shape.GetHyperlink();
hyperlink.SetLink('https://api.onlyoffice.com/');
infoParagraph.AddText('Shape hyperlink updated link: ' + hyperlink.GetLinkedText());

docContent.Push(infoParagraph);
slide.AddObject(shape);
