// This example shows how to get currently active chart from the workbook

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue('John Smith');
worksheet.GetRange('B1').SetValue('Mark Pottato');
worksheet.GetRange('A2').SetValue(10);
worksheet.GetRange('B2').SetValue(12);

const chart = worksheet.AddChart(
	'Sheet1!A1:B2',
	true,
	'bar3D', 42,
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(70),
	0, 0, 3, Api.MillimetersToEmus(1)
);
chart.SetTitle('Full Names Length', 15);
chart.Select();

const activeChart = workbook.GetActiveChart();
const chartTitle = activeChart.GetTitle();
worksheet.GetRange('D1').SetValue('Active Chart Title: ' + chartTitle);
