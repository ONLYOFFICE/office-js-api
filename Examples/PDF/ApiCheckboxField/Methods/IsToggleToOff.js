// This example gets toggle to off property of checkbox field.
let doc = Api.GetDocument();
let checkboxField = doc.AddCheckboxField(0, [10, 10, 25, 25]);
checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());