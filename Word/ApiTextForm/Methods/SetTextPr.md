# SetTextPr

Sets the text properties to the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the text properties to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextForm.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();
```