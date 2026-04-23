// Delete a data series from a chart using its position in a PDF.

// How do I remove one series from a chart in a PDF?

// Take away a series by its index to simplify a chart in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.RemoveSeria(1);
chart.SetTitle("The Estimated Costs series was removed from the current chart.");
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 0, false);
page.AddObject(chart);