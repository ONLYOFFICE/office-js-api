# SetBackgroundColor

Sets the background color to the current form.<br>Inherited From: [ApiFormBase#SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md)

## Syntax

expression.SetBackgroundColor(r, g, b, bNone);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| bNone | Required | Boolean | Defines that background color will not be set. |

## Returns

Boolean

## Example

This example sets the background color to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetBackgroundColor(255, 111, 61);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();
```