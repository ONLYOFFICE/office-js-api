// This example sets checkbox widget check style.
let doc = Api.GetDocument();
let radiobuttonField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');