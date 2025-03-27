// This example shows how to get the state of sheet visibility.
let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);