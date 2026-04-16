// Get checkbox widget checked prop in group of checkbox widgets in a PDF document.

// How can I is checked using a checkbox widget in a PDF document?

// Is checked for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetChecked(true);
console.log(widgets[0].IsChecked());