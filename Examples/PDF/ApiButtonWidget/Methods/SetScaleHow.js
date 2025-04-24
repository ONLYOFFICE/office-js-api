// This example sets button widget scale how type.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 120, 100]);
let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());