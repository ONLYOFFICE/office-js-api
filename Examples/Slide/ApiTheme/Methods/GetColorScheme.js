// This example shows how to get the color scheme of the theme.

// How to get a color scheme of presentation master's theme.

// Get a theme color scheme and change its colors.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const theme = master.GetTheme();

const clrScheme = theme.GetColorScheme();
clrScheme.ChangeColor(0, Api.CreateRGBColor(255, 111, 61));
clrScheme.ChangeColor(1, Api.CreateRGBColor(51, 51, 51));

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
