// Create and add a field with image to document.

// Create the image field in a PDF document.

// Create the image field and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);
let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');