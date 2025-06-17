// This example shows how to convert the ApiPresentation object into the JSON object.

// How to convert the presentation object to JSON objects.

// Get JSON representations of each slide from the presentation.

const presentation = Api.GetPresentation();
const json = presentation.ToJSON(true);
const presentationFromJSON = Api.FromJSON(json);
const slide = presentationFromJSON.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const classType = presentationFromJSON.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);
