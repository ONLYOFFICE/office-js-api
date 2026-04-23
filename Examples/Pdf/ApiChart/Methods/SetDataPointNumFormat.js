// Format the numbers shown on chart data points in a PDF.

// How do I control the number format displayed on individual data points in a PDF?

// Apply a specific number format to a data point in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetDataPointNumFormat("0.00", 0, 0, true);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);