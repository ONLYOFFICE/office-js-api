// Get the text alignment of a form field widget in a PDF.

// How do I retrieve the text alignment of a widget in a PDF?

// Read and display the text alignment setting of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextAlign('center');
});
let textAlign = widgets[0].GetTextAlign();
textField.SetValue('Widget text alignment is: ' + textAlign);
