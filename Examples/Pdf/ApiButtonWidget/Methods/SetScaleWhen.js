// Set button widget scale when type in a PDF document.

// Keep the button icon at its own size with the 'never' scale when type.

// Display the set scale when value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
widgets[0].SetScaleWhen('never');
widgets[0].SetLabel('Scale when is: ' + widgets[0].GetScaleWhen());