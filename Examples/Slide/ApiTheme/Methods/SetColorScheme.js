// Apply a new color scheme to a presentation's theme.

// How do I change the colors used throughout a presentation?

// Create a custom color scheme and assign it to the theme in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = Api.CreateThemeColorScheme([
	Api.RGB(255, 111, 61), Api.RGB(51, 51, 51), Api.RGB(230, 179, 117),
	Api.RGB(235, 235, 235), Api.RGB(163, 21, 21), Api.RGB(128, 43, 43),
	Api.RGB(0, 0, 0), Api.RGB(128, 128, 128), Api.RGB(176, 196, 222),
	Api.RGB(65, 105, 225), Api.RGB(255, 255, 255), Api.RGB(255, 213, 191)
], "New color scheme");

const theme = slide.GetTheme();
theme.SetColorScheme(colorScheme);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 40);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
slide.AddObject(chart);