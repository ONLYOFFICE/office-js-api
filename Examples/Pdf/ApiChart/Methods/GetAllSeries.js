// How to get types of all series of a chart.

// Get all series from a chart.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);

let series, seriesType, title = "";
const allSeries = chart.GetAllSeries();
for (let seriesIndex = 0; seriesIndex < allSeries.length; ++seriesIndex) {
	series = allSeries[seriesIndex];
	seriesType = series.GetChartType();
	title += ((seriesIndex + 1) + " Series Type = " + seriesType + "\n");
}
chart.SetTitle(title, 20);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);
