// Convert a slide object to JSON format.

// Export the slide as JSON and reconstruct it from the JSON data.

// Verify the class type of the reconstructed slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const json = slide.ToJSON(true, true, true, true);
const slideFromJSON = Api.FromJSON(json);
presentation.AddSlide(slideFromJSON);
const classType = slideFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);