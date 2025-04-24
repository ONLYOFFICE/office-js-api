// This example gets field widget and displays it's border color.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.CreateRGBColor(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
let borderColor = widgets[0].GetBorderColor();
textField.SetValue('Widgets border color is: ' + borderColor.R + ',' + borderColor.G + ',' + borderColor.B);

