// Select several rows together to style them all at once in a spreadsheet.

// Work with a group of rows when you want to apply one change everywhere in a spreadsheet?

// Color a row range uniformly by treating it as a single collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));