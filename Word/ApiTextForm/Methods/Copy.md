# Copy

Copies the current form (copies with the shape if it exists).<br>Inherited From: [ApiFormBase#Copy](../../ApiFormBase/Methods/Copy.md)

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextForm](../ApiTextForm.md)

## Example

This example copies the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oCopyTextForm = oTextForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyTextForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```