// This example gets checkbox field object class type.
let doc = Api.GetDocument();
let checkboxField = doc.AddCheckboxField(0, [10, 10, 25, 25]);
console.log('Field type is: ' + checkboxField.GetClassType());