# GetFormsByTag

Returns a list of all forms in the document with the specified tag name.

## Syntax

expression.GetFormsByTag(sTag);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTag | Required | String | Form tag. |

## Returns

Array<[ApiForm](../../../Enumerations/ApiForm.md)>

## Example

This example shows how to get a list of all forms in the document with the specified tag name.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
oParagraph.AddLineBreak();
oParagraph.AddElement(oComboBoxForm);
var aForms = oDocument.GetFormsByTag("form_1");
aForms[0].SetText("John Smith");
aForms[1].SelectListValue("USA");
builder.SaveFile("docx", "GetFormsByTag.docx");
builder.CloseFile();
```