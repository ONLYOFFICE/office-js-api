// This example shows how to get the ApiRange object by the range reference.
let worksheet = Api.GetActiveSheet();
let range = Api.GetRange("A1:C1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");