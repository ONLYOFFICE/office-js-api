// This example adds radiobutton field to document.
let doc = Api.GetDocument();
let radioField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
radioField.AddOption(0, [10, 15, 25, 30], 'Choice 2');
radioField.SetValue('Choice 2');