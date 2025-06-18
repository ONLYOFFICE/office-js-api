// This example demonstrates how to set and get the language of the current presentation using the ApiCore.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLanguage("en-US");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const language = core.GetLanguage();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Language: " + language);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
