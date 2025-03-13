// Set the "text" form type to the first form of the current document.

// How to specify the form type.

// Create the form data with the "text" form type and set it to the first form in the document.

var sFormSpecificType = "text";
var oFormData = {"key": "CompanyName", "value": "ONLYOFFICE", "type": sFormSpecificType};
oDocument.SetFormsData([oFormData]);