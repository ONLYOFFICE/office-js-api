// This example gets radiobutton field check in unison property.
let doc = Api.GetDocument();
let radiobuttonField = doc.AddRadiobuttonField(0, [10, 10, 25, 25]);
radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);
radiobuttonField.SetValue('Choice1');
console.log('Check in unison is: ' + radiobuttonField.IsCheckInUnison());