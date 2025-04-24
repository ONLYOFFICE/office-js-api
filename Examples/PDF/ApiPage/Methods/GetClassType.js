// This example gets page object class type and displays it in text field.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = doc.AddTextField(0, [10, 10, 160, 32]);
textField.SetValue(page.GetClassType());