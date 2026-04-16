// Get the string data from the OLE object in a spreadsheet.

// How to get OLE object content as a string in a spreadsheet.

// Get OLE object data and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let data = oleObject.GetData();
worksheet.GetRange('A1').SetValue('The OLE object data: ' + data);