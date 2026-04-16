// Check the class type returned by a checkbox field in a PDF document.

// How do I check what type a checkbox field object is in a PDF document?

// Retrieve and output the class type string for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());