let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.IRR(range));