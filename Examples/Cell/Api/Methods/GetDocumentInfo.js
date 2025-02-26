// This example shows how to get the document info represented as an object and paste the application name into "A1" cell.

// How to get document info and iys application name.

// Get application name using document info.

const oDocInfo = Api.GetDocumentInfo();
const oRange = Api.GetActiveSheet().GetRange('A1');
oRange.SetValue('This document has been created with: ' + oDocInfo.Application)