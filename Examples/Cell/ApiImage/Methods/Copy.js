// Duplicate an image on a worksheet and read the class type of the copy.

// How do I make a copy of an image in a spreadsheet?

// Clone an image and verify the copy preserves the image class in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let image = worksheet.AddImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 35 * 36000, 0, 2 * 36000, 2, 3 * 36000);

let copyImage = image.Copy();
worksheet.GetRange("A1").SetValue("Copy class type:");
worksheet.GetRange("B1").SetValue(copyImage.GetClassType());
