// Enable or disable toggle-off behavior for a checkbox in a PDF.

// How do I make a checkbox uncheck when clicked if already checked in a PDF?

// Control whether a checked checkbox deselects on a second click in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);