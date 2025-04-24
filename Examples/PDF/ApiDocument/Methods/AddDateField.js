// This example adds text field with date picker to document.
let doc = Api.GetDocument();
let dateField = doc.AddDateField(0, [10, 10, 160, 32]);
dateField.SetValue('01.01.2025');