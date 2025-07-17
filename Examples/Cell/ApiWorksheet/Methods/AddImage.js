// This example adds an image to the sheet with the parameters specified.

// How to add an image to the worksheet specifying its url and size.

// Insert an image to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
