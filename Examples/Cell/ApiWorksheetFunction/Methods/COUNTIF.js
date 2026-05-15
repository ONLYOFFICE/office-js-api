// Count cells matching a specific criteria in a spreadsheet.

// What is the total of entries that match your pattern in a spreadsheet?

// Find how many cells contain values that meet your requirement in a spreadsheet.

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