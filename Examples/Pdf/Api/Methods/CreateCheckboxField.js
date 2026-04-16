// How to create and add a checkbox field to document.

// How to create the checkbox field in a PDF document?

// Create the checkbox field using the PDF document API.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);
checkboxField.SetValue('Yes');