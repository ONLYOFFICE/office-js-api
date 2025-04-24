// This example creates a color and sets it as the widget's border color.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 32]);
let widgets = textField.GetAllWidgets();
let widget = widgets[0];

let rgbColor = Api.CreateRGBColor(255, 100, 0);
widget.SetBorderColor(rgbColor);
