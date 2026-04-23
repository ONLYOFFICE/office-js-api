// Write new content into an embedded object in a spreadsheet.

// How do I update the data stored in an embedded object in a spreadsheet?

// Replace the existing value inside an embedded object with fresh content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
oleObject.SetData('https://youtu.be/eJxpkjQG6Ew');