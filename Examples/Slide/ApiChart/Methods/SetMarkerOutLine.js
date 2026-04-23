// Add a border to data point markers in a chart in a presentation.

// How do I add an outline around the data point symbols in a chart in a presentation?

// Apply different border colors and widths to markers in different data series in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
slide.AddObject(chart);