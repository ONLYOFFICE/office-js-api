// Convert an entire presentation to JSON format in a presentation.

// How do I export a presentation to JSON in a presentation?

// Serialize the presentation structure and recreate it from JSON in a presentation.

const presentation = Api.GetPresentation();
const json = presentation.ToJSON(true);
const presentationFromJSON = Api.FromJSON(json);
const slide = presentationFromJSON.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const classType = presentationFromJSON.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);