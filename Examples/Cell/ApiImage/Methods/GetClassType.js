// Retrieve the class type of an image in a spreadsheet.

// How to identify the class type of an image in a spreadsheet?

// Obtain the class type identifier of an image object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let image = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	0, 2 * 36000, 2, 3 * 36000
);
let classType = image.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange('A1').SetValue('Class Type = ');
worksheet.GetRange('B1').SetValue(classType);