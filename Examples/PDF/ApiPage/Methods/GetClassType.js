// This example gets page object class type and displays it in text field.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());