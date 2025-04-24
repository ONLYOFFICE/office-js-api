// This example adds an option for checkbox field group.
let doc = Api.GetDocument();
let checkboxField = doc.AddCheckboxField(0, [10, 10, 25, 25]);
checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());