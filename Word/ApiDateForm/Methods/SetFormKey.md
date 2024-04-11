# SetFormKey

Sets a key to the current form.<br>Inherited From: [ApiFormBase#SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)

## Syntax

expression.SetFormKey(sKey);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sKey | Required | String | Form key. |

## Returns

Boolean

## Example

This example sets a key to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetFormKey("Date form key");
var sKey = oDateForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetFormKey.docx");
builder.CloseFile();
```