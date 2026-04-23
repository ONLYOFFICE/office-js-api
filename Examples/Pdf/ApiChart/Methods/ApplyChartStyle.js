// Apply a preset style to a chart in a PDF.

// How do I change the visual appearance of a chart in a PDF?

// Use a style preset to update a chart's formatting in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.ApplyChartStyle(2);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetSeriesFill(fill, 0, false);
chart.SetSeriesOutLine(stroke, 0, false);

fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriesOutLine(stroke, 1, false);
page.AddObject(chart);