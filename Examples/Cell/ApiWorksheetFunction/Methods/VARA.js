

let worksheet = Api.GetActiveSheet();

// Data array
let data = [
    [1, 0, 0, false],
    ["text", 1, 0, 0],
    [2, 3, true, 7],
    [6, 8, 10, 12]
];

// Place the data in cells A1:D4
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        worksheet.GetRangeByNumber(i, j).SetValue(data[i][j]);
    }
}

// Calculate the letA of the range A1:D4 and place the result in cell E6
let func = Api.GetWorksheetFunction();
let letaResult = func.VARA(worksheet.GetRange("A1:D4"));
worksheet.GetRange("E6").SetValue(letaResult);


