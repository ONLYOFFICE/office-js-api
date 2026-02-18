// This example gets button widget fit bounds property and displays it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());