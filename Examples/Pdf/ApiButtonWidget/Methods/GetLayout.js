// Find the layout style of a button widget in a PDF.

// How do I check the button layout arrangement in a PDF?

// Retrieve the icon and text arrangement setting for a button in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetLabel('Layout is: ' + widgets[0].GetLayout());