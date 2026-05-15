// Switch a data series to a different chart type in a PDF.

// How do I change how one series in a chart displays in a PDF?

// Display chart data as a different type, such as converting a line series to an area chart in a PDF.

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

const series = chart.GetSeries(0);
let seriesType = series.GetChartType();
let title = "Old Series Type = " + seriesType + "\n";

series.ChangeChartType("area");
seriesType = series.GetChartType();
title += "New Series Type = " + seriesType;

chart.SetTitle(title, 20);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);