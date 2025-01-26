let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let numbers = [67, 87, 98, 45];

for (let i = 0; i < numbers.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

let range = worksheet.GetRange("A1:A4");
worksheet.GetRange("C1").SetValue(func.AVERAGEIF(range, ">45"));