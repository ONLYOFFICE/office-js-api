// This example gets document pages count and displays it in text field.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = doc.AddTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetPagesCount());