// Retrieve every embedded OLE object from a worksheet in a spreadsheet.

// How do I list all OLE objects on a sheet in a spreadsheet?

// Collect the full set of embedded objects from a worksheet in a spreadsheet.

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