// This example shows how to get the list values from the combo box.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
let listValues = comboBoxForm.GetListValues();
paragraph = Api.CreateParagraph();
paragraph.AddText("Combo box list values: ");
paragraph.AddLineBreak();
for (let i = 0; i < listValues.length; i++ ){
	paragraph.AddText(listValues[i]);
	paragraph.AddLineBreak();
}
document.Push(paragraph);