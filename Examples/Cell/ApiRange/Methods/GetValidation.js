// This example shows how to get the validation object for a range.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Try to enter a whole number less than 10 in A2:B5. Warning will be shown.');
const range = worksheet.GetRange('A2:B5');
const validation = range.GetValidation();
validation.Add('xlValidateWholeNumber', 'xlValidAlertWarning', 'xlGreater', 10);

worksheet.GetRange('A7').SetValue('Type:');
worksheet.GetRange('B7').SetValue(validation.GetType());
worksheet.GetRange('A8').SetValue('Range:');
worksheet.GetRange('B8').SetValue(validation.GetParent().GetAddress());
