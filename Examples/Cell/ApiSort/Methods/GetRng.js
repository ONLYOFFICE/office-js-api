// This example gets the data body range that a table sort applies to.

// How to retrieve the range being sorted by the sort object.

// Get the data range being sorted.

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
