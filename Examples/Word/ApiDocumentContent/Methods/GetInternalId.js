// This example shows how to get the internal ID of a document content.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(70, 130, 180));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', Api.MillimetersToEmus(100), Api.MillimetersToEmus(60), fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetContent();
const internalId = docContent.GetInternalId();

const shapeParagraph = docContent.GetElement(0);
shapeParagraph.AddText('Document content internal ID: ' + internalId);
