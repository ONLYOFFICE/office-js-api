// Get the type of an icon set conditional formatting rule in a spreadsheet.

// How can I get the type using an icon set condition in a spreadsheet?

// Get the type for an icon set condition in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Ratings');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(25);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const conditionType = iconCondition.GetType();
worksheet.GetRange('B1').SetValue('Icon set condition type: ' + conditionType);