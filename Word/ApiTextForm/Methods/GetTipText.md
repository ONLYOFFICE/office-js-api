# GetTipText

Returns the tip text of the current form.<br>Inherited From: [ApiFormBase#GetTipText](../../ApiFormBase/Methods/GetTipText.md)

## Syntax

expression.GetTipText();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the tip text of the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sTipText = oTextForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTipText.docx");
builder.CloseFile();
```