// Retrieve the behavior type of a button widget in a PDF.

// How do I find the button behavior setting in a PDF?

// Display the behavior configuration for a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behavior is: ' + widgets[0].GetBehavior());