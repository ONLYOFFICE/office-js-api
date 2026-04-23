// Retrieve button labels in different states in a PDF.

// How do I access the text displayed on a button in a PDF?

// Get the label for each button state (normal, hover, down) in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('push');

widgets[0].SetLabel('Normal label', 'normal');
widgets[0].SetLabel('Down label', 'down');
widgets[0].SetLabel('Hover label', 'hover');

let labels = [widgets[0].GetLabel('normal'), widgets[0].GetLabel('down'), widgets[0].GetLabel('hover')];
console.log('Button widget labels are: ' + labels);