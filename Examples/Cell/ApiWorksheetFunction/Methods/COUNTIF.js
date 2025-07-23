// This example shows how to count a number of cells within a range that meet the given condition.

// How to find a number of cells that satisfies some condition.

// Use function to get cells if a condition is met.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let fruits = ["Apples", "ranges", "Bananas"];
let numbers = [45, 6, 8];

for (let i = 0; i < fruits.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(fruits[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("D3").SetValue(func.COUNTIF(range, "*es"));