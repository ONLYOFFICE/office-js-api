// This example shows how to find the average (arithmetic mean) for the cells specified by a given set of conditions or criteria.

// How to find an average if list of conditions are met.

// Use function to get an average (arithmetic mean) of the cells if the set of requirements is satisfied.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let year = [2016, 2016, 2016, 2017, 2017, 2017];
let products = ["Apples", "Red apples", "ranges", "Green apples", "Apples", "Bananas"];
let income = ["$100.00", "$150.00", "$250.00", "$50.00", "$150.00", "$200.00"];

for (let i = 0; i < year.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(year[i]);
}
for (let j = 0; j < products.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(products[j]);
}
for (let n = 0; n < income.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(income[n]);
}

let range1 = worksheet.GetRange("C1:C6");
let range2 = worksheet.GetRange("B1:B6");
let range3 = worksheet.GetRange("A1:A6");
worksheet.GetRange("E6").SetValue(func.AVERAGEIFS(range1, range2, "*Apples", range3, 2016));