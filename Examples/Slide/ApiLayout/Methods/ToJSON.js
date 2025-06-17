// This example converts the ApiLayout object into the JSON object.

// How to convert a layout object to a JSON object.

// Get a slide layout object from a slide and convert to JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const json = layout.ToJSON(true, false);
const layoutFromJSON = Api.FromJSON(json);
master.AddLayout(0, layoutFromJSON);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const classType = layoutFromJSON.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);
layoutFromJSON.AddObject(shape);
slide.ApplyLayout(layoutFromJSON);
