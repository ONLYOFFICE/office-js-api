// This example shows how to get the document info represented as an object and paste the application name into "A1" cell.

// How to get document info and iys application name.

// Get application name using document info.

let docInfo = Api.GetDocumentInfo();
let range = Api.GetActiveSheet().GetRange('A1');
range.SetValue('This document has been created with: ' + docInfo.Application);