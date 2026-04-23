// Arrange table rows so specific background colors appear in a defined order in a spreadsheet.

// How do I sort rows by fill color so red comes first and yellow comes second in a spreadsheet?

// Assign a target color to each sort column so the table groups rows by their background shade in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("A5").SetValue("Grapes");

let redColor    = Api.CreateColorFromRGB(255, 0,   0);
let yellowColor = Api.CreateColorFromRGB(255, 255, 0);

worksheet.GetRange("A3").FillColor = redColor;
worksheet.GetRange("A4").FillColor = yellowColor;

let table = worksheet.AddListObject("xlSrcRange", "A1:A5");

let sort   = table.GetSort();
let fields = sort.GetSortFields();

fields.Clear();

let field1 = fields.Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field1.SetSortOnColor(redColor, "xlSortOnCellColor");

let field2 = fields.Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field2.SetSortOnColor(yellowColor, "xlSortOnCellColor");

sort.Apply();

worksheet.GetRange("C1").SetValue("After sort by color:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A3").GetValue());
worksheet.GetRange("D3").SetValue(worksheet.GetRange("A4").GetValue());
worksheet.GetRange("D4").SetValue(worksheet.GetRange("A5").GetValue());