# GetFormType

Returns a type of the current form.<br>Inherited From: [ApiFormBase#GetFormType](../../ApiFormBase/Methods/GetFormType.md)

## Syntax

expression.GetFormType();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FormType](../../../Enumerations/FormType.md)

## Example

This example shows how to get a type of the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var sFormType = oDateForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();
```