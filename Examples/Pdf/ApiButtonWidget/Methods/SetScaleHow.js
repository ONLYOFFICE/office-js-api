// Set button widget scale how type in a PDF document.

// Stretch the button icon to the widget with the 'anamorphic' scale how type.

// Display the set scale how value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
widgets[0].SetScaleHow('anamorphic');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());