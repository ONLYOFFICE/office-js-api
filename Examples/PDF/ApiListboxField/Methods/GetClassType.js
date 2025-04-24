// This example gets field type and display it.
let doc = Api.GetDocument();
let listboxField = doc.AddListboxField(0, [10, 10, 160, 100]);
listboxField.AddOption('Field type is: ' + listboxField.GetClassType());
listboxField.SetValueIndexes([0]);