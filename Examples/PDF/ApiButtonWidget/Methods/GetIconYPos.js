// This example gets icon Y position from field with image.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 120, 100]);
let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetLabel('Icon Y position is: ' + widgets[0].GetIconXPos());