// Check if a checkbox can toggle off when clicked in a PDF.

// How do I find out if a checkbox uses toggle-off behavior in a PDF?

// Determine whether a checked checkbox unselects when clicked again in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());