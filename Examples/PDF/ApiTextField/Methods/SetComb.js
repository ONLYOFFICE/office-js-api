// This example adds text field and sets comb for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is: ' + textField.IsComb());
