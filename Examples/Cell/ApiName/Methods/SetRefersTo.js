// This example sets a formula that the name is defined to refer to.

// How to add a name and refer it to the formula.

// Create new ranges and a formula, refer a name to the formula then display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");