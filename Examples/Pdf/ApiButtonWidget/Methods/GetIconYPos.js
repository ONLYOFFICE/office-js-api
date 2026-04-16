// Get icon Y position from field with image in a PDF document.

// How can I get the icon y pos using a button widget in a PDF document?

// Get the icon y pos for a button widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetLabel('Icon Y position is: ' + widgets[0].GetIconXPos());