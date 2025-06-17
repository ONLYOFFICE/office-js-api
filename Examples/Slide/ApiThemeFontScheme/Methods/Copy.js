// This example creates a copy of the theme font scheme.

// How to create a copy of a font scheme.

// Get font scheme and create its copy.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();

var master = presentation.GetMaster(0);
var theme1 = master.GetTheme();
var fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
theme1.SetFontScheme(fontScheme);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("New font scheme was set to this slide.");
slide1.AddObject(shape);

const copyFontScheme = fontScheme.Copy();
slide1.ApplyTheme(theme1);

const slide2 = Api.CreateSlide();
slide2.RemoveAllObjects();
presentation.AddSlide(slide2);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const oFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const oFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const oFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const oBgFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const oBgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const oBgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const oStroke1 = Api.CreateStroke(1 * 36000, oFill1);
const oStroke2 = Api.CreateStroke(1 * 36000, oFill2);
const oStroke3 = Api.CreateStroke(1 * 36000, oFill3);

const formatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
const colorScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117), Api.CreateRGBColor(235, 235, 235),
	Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128),
	Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");
const theme2 = Api.CreateTheme("New theme", master, colorScheme, formatScheme, copyFontScheme);
slide2.ApplyTheme(theme2);

fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
docContent = shape.GetDocContent();
paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("New font scheme was set to this slide.");
slide2.AddObject(shape);
