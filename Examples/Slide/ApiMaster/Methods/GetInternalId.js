// Get the internal identifier of a slide master in a presentation.

// Identify a specific slide master by the ID that the editor assigns to it in a presentation.

// Display the internal ID of the first slide master, which stays valid only while the presentation is open.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const internalId = master.GetInternalId();

const fill = Api.CreateSolidFill(Api.HexColor('#FADBD8'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText('Slide master internal ID: ' + internalId);
slide.AddObject(shape);