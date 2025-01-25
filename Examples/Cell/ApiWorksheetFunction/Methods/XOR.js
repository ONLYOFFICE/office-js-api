
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.TRUE(); //returns TRUE, doesnt require arguments

worksheet.GetRange("A1").SetValue(ans);
