// Add a hyperlink to the specified range in a spreadsheet.

// How to add hyperlinks to the range in a spreadsheet.

// Add a hyperlink to the cell.

let worksheet = Api.GetActiveSheet();
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
worksheet.SetHyperlink('A1', logoUrl, 'Api ONLYOFFICE', 'ONLYOFFICE for developers');