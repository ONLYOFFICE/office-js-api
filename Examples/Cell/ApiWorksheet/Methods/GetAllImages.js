// Retrieve every image embedded on a worksheet in a spreadsheet.

// How do I list all images placed on a sheet in a spreadsheet?

// Collect the full set of images from a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
let images = worksheet.GetAllImages();
let classType = images[0].GetClassType();
worksheet.GetRange("A10").SetValue("Class Type = " + classType);