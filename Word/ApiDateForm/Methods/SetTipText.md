# SetTipText

Sets the tip text to the current form.<br>Inherited From: [ApiFormBase#SetTipText](../../ApiFormBase/Methods/SetTipText.md)

## Syntax

expression.SetTipText(sText);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | Tip text. |

## Returns

Boolean

## Example

This example sets the tip text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetTipText("Enter your date");
var sTipText = oDateForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTipText.docx");
builder.CloseFile();
```