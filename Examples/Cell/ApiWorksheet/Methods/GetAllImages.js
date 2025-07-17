// This example shows how to get all images from the sheet.

// How to get all images.

// Get all images as an array.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
let images = worksheet.GetAllImages();
let classType = images[0].GetClassType();
worksheet.GetRange("A10").SetValue("Class Type = " + classType);