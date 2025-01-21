// This example shows how to get a list of all tags that are used for all forms in the document.
let document = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "tag": "form_2", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = document.GetAllForms();
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");
let tags = document.GetTagsOfAllForms();
paragraph = Api.CreateParagraph();
paragraph.AddText("Forms tags: ");
paragraph.AddLineBreak();
for (let i = 0; i < tags.length; i++ ){
	paragraph.AddText(tags[i]);
	paragraph.AddLineBreak();
}
document.Push(paragraph);