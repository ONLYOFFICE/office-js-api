// Check the class type returned by a radio button field in a PDF document.

// How do I check what type a radio button field object is in a PDF document?

// Retrieve and output the class type string for a radio button field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

console.log('Field type is: ' + radiobuttonField.GetClassType());