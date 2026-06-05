// Access all input fields in a PDF.

// How do I retrieve all the form fields from a PDF?

// Locate and list each field's type in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);

let textField = Api.CreateTextField([10, 10, 160, 30]);
let comboboxField = Api.CreateComboboxField([10, 40, 160, 60]);
let listboxField = Api.CreateListboxField([10, 70, 100, 130]);

page.AddObject(textField);
page.AddObject(comboboxField);
page.AddObject(listboxField);

let allFields = doc.GetAllFields();
allFields.forEach(function(field) {
    console.log(field.GetClassType());
});
