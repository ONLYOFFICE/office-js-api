// This example gets button widget labels and displays it.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 120, 100]);
let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('push');

widgets[0].SetLabel('Normal label', 'normal');
widgets[0].SetLabel('Down label', 'down');
widgets[0].SetLabel('Hover label', 'hover');

let labels = [widgets[0].GetLabel('normal'), widgets[0].GetLabel('down'), widgets[0].GetLabel('hover')];
console.log('Button widget labels are: ' + labels);
