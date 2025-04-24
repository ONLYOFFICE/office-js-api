// This example gets value from first text field and sets to second text field.
let doc = Api.GetDocument();
let textField1 = doc.AddTextField(0, [10, 10, 160, 30]);
textField1.SetValue('Name Surname');

let textField2 = doc.AddTextField(0, [10, 40, 160, 60]);
textField2.SetValue(textField1.GetValue());
