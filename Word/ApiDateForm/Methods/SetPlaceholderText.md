# SetPlaceholderText

Sets the placeholder text to the current form. Can't be set to checkbox or radio button.<br>Inherited From: [ApiFormBase#SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the placeholder text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetPlaceholderText("Your placeholder");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```