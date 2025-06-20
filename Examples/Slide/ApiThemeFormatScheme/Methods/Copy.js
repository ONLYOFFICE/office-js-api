// This example creates a copy of the current theme format scheme.

// How to create a copy of a format scheme.

// Get format scheme and create its copy.

const presentation = Api.GetPresentation();
var master = presentation.GetMaster(0);

let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const bgFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke1 = Api.CreateStroke(1 * 36000, fill1);
const fill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const bgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const stroke2 = Api.CreateStroke(1 * 36000, fill2);
const fill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const bgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke3 = Api.CreateStroke(1 * 36000, fill3);

const formatScheme = Api.CreateThemeFormatScheme([fill1, fill2, fill3], [bgFill1, bgFill2, bgFill3], [stroke1, stroke2, stroke3], "New format scheme");
const colorScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");

const fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");

const theme1 = Api.CreateTheme("Theme 1", master, colorScheme, formatScheme, fontScheme);
presentation.ApplyTheme(theme1);

const slide = Api.CreateSlide();
presentation.AddSlide(slide);

gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 218, 185), 0);
gs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 203, 173), 100000);
const newBgFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const newBgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(238, 203, 173), Api.CreateRGBColor(51, 51, 51));
const newBgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(238, 203, 173));
const copyFormatScheme = formatScheme.Copy();
copyFormatScheme.ChangeBgFillStyles([newBgFill1, newBgFill2, newBgFill3]);
const theme2 = Api.CreateTheme("Theme 2", master, colorScheme, copyFormatScheme, fontScheme);
slide.ApplyTheme(theme2);
