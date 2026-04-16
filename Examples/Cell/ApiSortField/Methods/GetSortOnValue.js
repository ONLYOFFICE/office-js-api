// Get the sort-on value (color) of a sort field in a spreadsheet.

// How to retrieve the color value set for color-based sorting in a spreadsheet.

// Set a sort color, then read it back via GetSortOnValue in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let yellowColor = Api.CreateColorFromRGB(255, 255, 0);
let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field.SetSortOnColor(yellowColor, "xlSortOnCellColor");

let rgb = field.GetSortOnValue().GetRGB();
worksheet.GetRange("C1").SetValue("Sort color RGB:");
worksheet.GetRange("D1").SetValue(rgb);