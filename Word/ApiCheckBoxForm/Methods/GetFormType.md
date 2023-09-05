# GetFormType

Returns a type of the current form.<br>Inherited From: [ApiFormBase#GetFormType](../../ApiFormBase/Methods/GetFormType.md)

## Syntax

expression.GetFormType();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FormType](../../../Enumerations/FormType.md)

## Example

This example shows how to get a type of the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sFormType = oCheckBoxForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();
```