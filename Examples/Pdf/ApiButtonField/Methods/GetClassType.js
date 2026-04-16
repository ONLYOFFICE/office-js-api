// Retrieve the class type of a button field in a PDF document.

// How to identify the class type of a button field in a PDF document?

// Obtain the class type identifier of a button field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

console.log('Widget type is: ' + buttonField.GetClassType());