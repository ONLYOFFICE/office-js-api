// This example returns an array of all paragraphs from the document content.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(189, 215, 175));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph1 = docContent.GetElement(0);
paragraph1.AddText('Paragraph 1');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Paragraph 2');
docContent.Push(paragraph2);

const allParagraphs = docContent.GetAllParagraphs();

allParagraphs[0].SetBold(true);
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Total paragraphs: ' + allParagraphs.length);
docContent.Push(infoParagraph);
page.AddObject(shape);
