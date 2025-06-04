// This example demonstrates how to set and get the description of the current presentation using the ApiCore.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetDescription("This is a sample presentation made to help fellow users understand how to use the ApiCore methods.");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const description = core.GetDescription();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Description: " + description);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
