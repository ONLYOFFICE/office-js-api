// Set button widget behavior type in a PDF document.

// Apply behavior type such as 'outline' to a button widget.

// Display the set behavior value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behabior is: ' + widgets[0].GetBehavior());