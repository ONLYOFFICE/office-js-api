// Look up a shape by its internal ID and display its class type in a presentation.

// Pass the ID returned by GetInternalId to get the same shape back in a presentation.

// Find a shape by an internal ID that stays valid only while the presentation is open.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#FADBD8'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const internalId = shape.GetInternalId();
const found = Api.GetByInternalId(internalId);

const paragraph = found.GetDocContent().GetElement(0);
paragraph.AddText('Found object class type: ' + found.GetClassType());