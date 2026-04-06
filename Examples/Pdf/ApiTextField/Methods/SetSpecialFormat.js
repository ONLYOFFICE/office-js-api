// This example gets text field and sets special format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");
