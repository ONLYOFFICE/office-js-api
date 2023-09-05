# GetFormType

Returns a type of the current form.

## Syntax

expression.GetFormType();

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FormType](../../../Enumerations/FormType.md)

## Example

This example shows how to get a type of the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sFormType = oTextForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();
```