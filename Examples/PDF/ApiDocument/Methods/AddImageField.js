// This example adds field with image to document.
let doc = Api.GetDocument();
let imageField = doc.AddImageField(0, [10, 10, 100, 100]);
let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');