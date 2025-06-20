// This example sets the format scheme to the current presentation theme.

// How to get a theme and set a new format scheme.

// Create a new format scheme and apply it to the slide theme.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

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
const theme = slide.GetTheme();
theme.SetFormatScheme(formatScheme);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 20);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
slide.AddObject(chart);
