// This example gets field widget and displays it's background color.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.CreateRGBColor(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
let bgColor = widgets[0].GetBackgroundColor();
textField.SetValue('Widgets background color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);

