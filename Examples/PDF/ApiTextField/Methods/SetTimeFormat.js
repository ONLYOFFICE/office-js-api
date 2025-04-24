// This example gets text field and sets time format for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetTimeFormat("12HR:MM:SS");
textField.SetValue("8:45:30");
