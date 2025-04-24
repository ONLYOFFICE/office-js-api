// This example gets page rotate of the first page in document and display it in the text field.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = doc.AddTextField(0, [10, 10, 160, 32]);
textField.SetValue('Page rotate is: ' + page.GetRotate());