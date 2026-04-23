// Copy the text from one form field to another in a PDF.

// How do I read the value entered in a form field in a PDF?

// Transfer text content between form fields in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());