// This example gets radiobutton field object class type.
let doc = Api.GetDocument();
let radiobuttonField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
console.log('Field type is: ' + radiobuttonField.GetClassType());