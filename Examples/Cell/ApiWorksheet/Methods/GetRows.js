// This example shows how to get the ApiRange object that represents all the cells on the rows range.
let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));