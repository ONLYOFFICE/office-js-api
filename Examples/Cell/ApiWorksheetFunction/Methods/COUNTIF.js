let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
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