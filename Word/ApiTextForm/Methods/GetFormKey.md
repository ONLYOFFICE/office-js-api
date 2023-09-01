# GetFormKey

Returns the current form key.<br>Inherited From: [ApiFormBase#GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)

## Syntax

expression.GetFormKey();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the form key.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sKey = oTextForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormKey.docx");
builder.CloseFile();
```