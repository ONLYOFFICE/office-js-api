// Read the title text from an existing chart in a spreadsheet.

// How do I retrieve the current title of a chart in a spreadsheet?

// Access the label displayed at the top of a chart in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue(2014);
worksheet.GetRange('C1').SetValue(2015);
worksheet.GetRange('A2').SetValue('Revenue');
worksheet.GetRange('B2').SetValue(200);
worksheet.GetRange('C2').SetValue(240);

const chart = worksheet.AddChart(
	'Sheet1!A1:C2',
	true, 'bar3D', 2,
	100 * 36000, 70 * 36000, 0, 0, 4, 0
);
chart.SetTitle('Financial Overview', 13);

const chartTitle = chart.GetTitle();
worksheet.GetRange('E1').SetValue('Chart Title: ' + chartTitle);