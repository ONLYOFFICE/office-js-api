// This example gets text field and sets date format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");
