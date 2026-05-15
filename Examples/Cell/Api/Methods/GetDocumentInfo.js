// Read the document properties and display the application name in a spreadsheet.

// How do I access general document information such as the application name in a spreadsheet?

// Retrieve metadata about the current file and write it into a cell in a spreadsheet.

let docInfo = Api.GetDocumentInfo();
let range = Api.GetActiveSheet().GetRange('A1');
range.SetValue('This document has been created with: ' + docInfo.Application);