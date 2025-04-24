// This example gets text field and sets regular expression validate for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue("example@gmail.com");
