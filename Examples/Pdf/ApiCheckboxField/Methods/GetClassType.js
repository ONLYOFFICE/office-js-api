// Identify the type of a checkbox field in a PDF.

// How do I find out what kind of object a checkbox field is in a PDF?

// Display the classification name of a checkbox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());