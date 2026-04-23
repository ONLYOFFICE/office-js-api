// Retrieve the cell range that a table sort will reorder in a spreadsheet.

// How do I find out which cells are included in the sort operation in a spreadsheet?

// Identify the exact data area affected by a sort in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let rng = sort.GetRng();

worksheet.GetRange("D1").SetValue("Sort range:");
worksheet.GetRange("E1").SetValue(rng ? rng.GetAddress() : "none");