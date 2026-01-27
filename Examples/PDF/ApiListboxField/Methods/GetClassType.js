// This example gets field type and display it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = doc.AddListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Field type is: ' + listboxField.GetClassType());
listboxField.SetValueIndexes([0]);