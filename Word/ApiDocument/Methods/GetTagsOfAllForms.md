# GetTagsOfAllForms

Returns a list of all tags that are used for all forms in the document.

## Syntax

expression.GetTagsOfAllForms();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<String>

## Example

This example shows how to get a list of all tags that are used for all forms in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "tag": "form_2", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
oParagraph.AddLineBreak();
oParagraph.AddElement(oComboBoxForm);
var aForms = oDocument.GetAllForms();
aForms[0].SetText("John Smith");
aForms[1].SelectListValue("USA");
var aTags = oDocument.GetTagsOfAllForms();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Forms tags: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aTags.length; i++ ){
	oParagraph.AddText(aTags[i]);
	oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTagsOfAllForms.docx");
builder.CloseFile();
```