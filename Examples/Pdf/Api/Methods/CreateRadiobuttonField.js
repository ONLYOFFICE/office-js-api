// Add a radio button field to a PDF form.

// How do I create a group of selectable radio buttons in a PDF?

// Create a radio button field and configure options in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let radioField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radioField);
radioField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
radioField.SetValue('Choice 2');