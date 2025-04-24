// This example gets button field object class type.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 25, 25]);
console.log('Widget type is: ' + buttonField.GetClassType());