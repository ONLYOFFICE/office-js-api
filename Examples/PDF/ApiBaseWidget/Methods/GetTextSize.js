// This example gets field widget and displays it's text size.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextSize(15);
});
let textSize = widgets[0].GetTextSize();
textField.SetValue('Text size is: ' + textSize);

