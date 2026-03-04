// This example returns an internal ID of the current document content.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#A2C4E0'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const internalId = docContent.GetInternalId();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Document content internal ID: ' + internalId);
page.AddObject(shape);
