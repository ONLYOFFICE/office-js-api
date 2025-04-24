// This example adds checkbox field to document.
let doc = Api.GetDocument();
let checkboxField = doc.AddCheckboxField(0, [10, 10, 25, 25]);
checkboxField.SetValue('Yes');