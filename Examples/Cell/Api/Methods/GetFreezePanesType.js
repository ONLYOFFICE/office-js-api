// This example freezes first column and get pastes a freezed type into the table.
Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());