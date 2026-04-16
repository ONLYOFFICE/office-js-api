// Get all OLE objects from the sheet in a spreadsheet.

// How to get all OLE objects images in a spreadsheet.

// Get all OLE objects as an array in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let oleObjects = worksheet.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
worksheet.GetRange('A1').SetValue('The application ID for the current OLE object: ' + appId);