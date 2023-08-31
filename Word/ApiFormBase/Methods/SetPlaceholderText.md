# SetPlaceholderText

Sets the placeholder text to the current form. Can't be set to checkbox or radio button.

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the placeholder text to the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetPlaceholderText("First name");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```