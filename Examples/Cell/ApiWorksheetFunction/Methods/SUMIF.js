// This example shows how to add the cells specified by a given condition or criteria.

// How to sum up all elements under the condition.

// Use a function to estimate a sum from the cells by a given condition.

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