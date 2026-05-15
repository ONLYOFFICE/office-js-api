// Retrieve the specific color assigned to a color-based sort criterion in a spreadsheet.

// How do I read back the fill color that a sort field uses to order rows in a spreadsheet?

// Assign a sort color, then confirm its RGB value is stored correctly in a spreadsheet.

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