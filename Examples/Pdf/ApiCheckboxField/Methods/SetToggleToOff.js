// Set toggle to off property for checkbox field in a PDF document.

// How can I set toggle to off using a checkbox field in a PDF document?

// Set toggle to off for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);