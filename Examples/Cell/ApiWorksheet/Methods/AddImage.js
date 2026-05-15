// Place an image onto a sheet at a specific position and size in a spreadsheet.

// How do I embed a picture from a URL into my sheet in a spreadsheet?

// Decorate a worksheet by inserting an image with defined dimensions and placement.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);