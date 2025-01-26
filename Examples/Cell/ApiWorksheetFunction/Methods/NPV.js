let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);
let values = ["Payment", -10000, 3000, 4500, 6000];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
let range = worksheet.GetRange("B2:B5");
worksheet.GetRange("B6").SetValue(func.NPV(0.05, range));