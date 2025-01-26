let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);

let payment = ["Payment/Income", -10000, 500, 5000, 3000];
let dates = ["Payment dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < payment.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(payment[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("C" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("C1").SetColumnWidth(15);
let range1 = worksheet.GetRange("B2:B5");
let range2 = worksheet.GetRange("C2:C5");
worksheet.GetRange("D5").SetValue(func.XNPV(0.05, range1, range2));