// Create a checkbox form field in a PDF.

// How do I add a checkbox to a form in a PDF?

// Set the initial value of a checkbox in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);
checkboxField.SetValue('Yes');