// This example gets the parent field of a widget.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myField");
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let parent = widgets[0].GetParent();
console.log('Parent field name: ' + parent.GetPartialName());
