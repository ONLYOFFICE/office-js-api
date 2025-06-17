// This example converts the ApiThemeFontScheme object into the JSON object.

// How to convert a ApiThemeFontScheme object to a JSON object.

// Create a ApiThemeFontScheme, convert it to JSON and create a new object from it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const themeMaster = master.GetTheme();
const fontScheme = themeMaster.GetFontScheme();
fontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
fontScheme.SetSchemeName("New font scheme name");

const json = fontScheme.ToJSON();
const fontSchemeFromJSON = Api.FromJSON(json);
const theme = slide.GetTheme();
theme.SetFontScheme(fontSchemeFromJSON);
const sType = fontSchemeFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + sType);
slide.AddObject(shape);
