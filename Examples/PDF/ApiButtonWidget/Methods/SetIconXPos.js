// This example sets field with image icon position X to 0.
let doc = Api.GetDocument();
let imageField = doc.AddImageField(0, [10, 10, 100, 100]);
let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconXPos(0);