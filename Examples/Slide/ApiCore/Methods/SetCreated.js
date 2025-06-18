// This example demonstrates how to set and get the creation date of a presentation using the ApiCore.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreated(new Date('20 January 2000'));

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const createdDate = core.GetCreated().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
