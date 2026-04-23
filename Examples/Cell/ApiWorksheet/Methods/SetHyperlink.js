// Attach a clickable hyperlink to a cell range in a spreadsheet.

// How do I add a hyperlink to a cell in a spreadsheet?

// Link a cell to an external URL so users can navigate to it directly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
worksheet.SetHyperlink('A1', logoUrl, 'Api ONLYOFFICE', 'ONLYOFFICE for developers');