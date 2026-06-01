// Read the text color of a form field widget in a PDF.

// How do I get the text color of a widget in a PDF?

// Retrieve and display the font color of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
});
let bgColor = widgets[0].GetTextColor();
textField.SetValue('Widgets text color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);