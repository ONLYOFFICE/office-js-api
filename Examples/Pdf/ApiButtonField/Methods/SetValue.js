// Set an image value for all button field widgets in a PDF.

// How do I assign an image to a button field?

// Create an image field and set the image for its widgets.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(buttonField);

buttonField.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
