// Remove a data series from a chart in a presentation.

// How do I delete a specific series from a chart by its index in a presentation?

// Create a chart and remove one of its data series in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.RemoveSeria(1);
chart.SetTitle("The Estimated Costs series was removed from the current chart.");
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 0, false);
slide.AddObject(chart);