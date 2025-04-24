// This example sets button widget behavior type.
let doc = Api.GetDocument();
let buttonField = doc.AddImageField(0, [10, 10, 120, 100]);
let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behabior is: ' + widgets[0].GetBehavior());