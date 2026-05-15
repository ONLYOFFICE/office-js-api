// Duplicate an OLE object on a worksheet and place the copy next to the original in a spreadsheet.

// How do I make a copy of an OLE object in a spreadsheet?

// Clone an OLE object and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 2, 3 * 36000
);

let copyOle = oleObject.Copy();
worksheet.AddDrawing(copyOle, 4, 2 * 36000, 2, 3 * 36000);
