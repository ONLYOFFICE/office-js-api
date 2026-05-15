// Get the unique identifier of a shape in a presentation.

// How do I retrieve the internal ID assigned to a shape in a presentation?

// Extract and display the unique internal ID of a drawing object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#FADBD8'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const internalId = shape.GetInternalId();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing internal ID: ' + internalId);
slide.AddObject(shape);