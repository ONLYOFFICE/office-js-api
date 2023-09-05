# GetFormKey

Returns the current form key.<br>Inherited From: [ApiFormBase#GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)

## Syntax

expression.GetFormKey();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the form key.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 2");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sKey = oCheckBoxForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormKey.docx");
builder.CloseFile();
```