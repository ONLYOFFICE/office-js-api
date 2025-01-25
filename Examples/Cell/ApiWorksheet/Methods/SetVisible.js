// This example sets the state of sheet visibility.
let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");