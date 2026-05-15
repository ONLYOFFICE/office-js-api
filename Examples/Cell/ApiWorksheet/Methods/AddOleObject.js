// Embed a linked object from an external source into a sheet in a spreadsheet.

// How do I insert an embedded object with a preview image and a link in a spreadsheet?

// Attach an interactive linked object to a worksheet at a given position and size.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);