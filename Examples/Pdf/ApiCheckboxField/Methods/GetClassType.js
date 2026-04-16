// Retrieve the class type of a checkbox field in a PDF document.

// How to identify the class type of a checkbox field in a PDF document?

// Obtain the class type identifier of a checkbox field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());