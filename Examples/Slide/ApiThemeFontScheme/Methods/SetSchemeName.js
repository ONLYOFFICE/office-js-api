// Set a name for a theme font scheme in a presentation.

// How do I assign a custom name to a font scheme in a presentation?

// Create a font scheme and give it a new name in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const fontScheme = theme.GetFontScheme();
fontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
fontScheme.SetSchemeName("New font scheme name");

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("New name was set to the theme font scheme.");
slide.RemoveAllObjects();
slide.AddObject(shape);