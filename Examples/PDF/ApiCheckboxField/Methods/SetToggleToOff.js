// This example sets toggle to off property for checkbox field.
let doc = Api.GetDocument();
let checkboxField = doc.AddCheckboxField(0, [10, 10, 25, 25]);
checkboxField.SetToggleToOff(false);