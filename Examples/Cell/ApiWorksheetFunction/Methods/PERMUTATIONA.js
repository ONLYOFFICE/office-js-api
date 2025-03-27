
const worksheet = Api.GetActiveSheet();

//method params
let number = 32;
let number_chosen = 2;

worksheet.GetRange("A1").SetValue(number);
worksheet.GetRange("B1").SetValue(number_chosen);

let func = Api.GetWorksheetFunction();
let ans = func.PERMUTATIONA(number, number_chosen);

worksheet.GetRange("C1").SetValue(ans);
