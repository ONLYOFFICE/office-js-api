# SetBorderColor

Sets the border color to the current form.<br>Inherited From: [ApiFormBase#SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)

## Syntax

expression.SetBorderColor(r, g, b, bNone);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| bNone | Required | Boolean | Defines that border color will not be set. |

## Returns

Boolean

## Example

This example sets the border color to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetBorderColor(255, 111, 61);
builder.SaveFile("docx", "SetBorderColor.docx");
builder.CloseFile();
```