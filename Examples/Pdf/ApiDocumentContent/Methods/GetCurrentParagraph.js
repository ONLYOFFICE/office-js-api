// Access the paragraph that is currently active in a shape in a PDF.

// How do I find the paragraph being edited in a PDF?

// Retrieve the most recent paragraph that was added to a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(200, 191, 231));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph = docContent.GetElement(0);
paragraph.AddText('First paragraph inside the shape.');

const newParagraph = Api.CreateParagraph();
newParagraph.AddText('Second paragraph inside the shape.');
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
if (currentParagraph) {
  currentParagraph.AddText(' (Current paragraph detected!)');
}
page.AddObject(shape);