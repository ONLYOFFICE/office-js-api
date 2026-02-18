// This example gets field widget and displays it's border color.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
let borderColor = widgets[0].GetBorderColor();
textField.SetValue('Widgets border color is: ' + borderColor.R + ',' + borderColor.G + ',' + borderColor.B);

