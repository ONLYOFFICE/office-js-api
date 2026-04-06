// This example gets text field and sets time format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("12HR:MM:SS");
textField.SetValue("8:45:30");
