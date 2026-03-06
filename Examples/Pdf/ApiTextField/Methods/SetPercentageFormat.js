// This example gets text field and sets percentage format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);
