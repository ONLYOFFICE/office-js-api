// Swap a selected image for a different one in a spreadsheet.

// How do I replace an existing image with a new one in a spreadsheet?

// Substitute the current image with another using its URL in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let drawing = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000,
	0, 2 * 36000, 0, 3 * 36000
); // todo_example we don't have method ApiDrawing.Select() which is necessary for this example
worksheet.ReplaceCurrentImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);