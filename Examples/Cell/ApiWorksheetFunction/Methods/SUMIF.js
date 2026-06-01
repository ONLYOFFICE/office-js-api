// Add the cells specified by a given condition or criteria in a spreadsheet.

// Sum values based on a single condition using the SUMIF function.

// Returns the total sum of cells that meet the specified criteria.

let worksheet = Api.GetActiveSheet();
let product = ["Product", "Apple", "range", "Banana"]
let totalValue = ["Total Value", "$736.00", "$924.00", "$888.00"];

for (let i = 0; i < product.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(product[i]);
}
for (let n = 0; n < totalValue.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(totalValue[n]);
}

let func = Api.WorksheetFunction;
let range = worksheet.GetRange("B2:B4");
worksheet.GetRange("C4").SetValue(func.SUMIF(range, ">800"));