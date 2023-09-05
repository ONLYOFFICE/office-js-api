# Copy

Copies the current form (copies with the shape if it exists).<br>Inherited From: [ApiFormBase#Copy](../../ApiFormBase/Methods/Copy.md)

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiCheckBoxForm](../ApiCheckBoxForm.md)

## Example

This example copies the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
var oCopyCheckBoxForm = oCheckBoxForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyCheckBoxForm);
oParagraph.AddText(" Single");
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```