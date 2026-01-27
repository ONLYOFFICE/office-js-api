// This example gets value from first text field and sets to second text field.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = doc.AddTextField([10, 10, 160, 30]);
let textField2 = doc.AddTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
