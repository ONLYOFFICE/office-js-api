// This example gets all fields in the document.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
let comboboxField = doc.AddComboboxField(0, [10, 40, 160, 60]);
let listboxField = doc.AddListboxField(0, [10, 70, 100, 130]);
let allFields = doc.GetAllFields();
allFields.forEach(function(field) {
    console.log(field.GetClassType());
});