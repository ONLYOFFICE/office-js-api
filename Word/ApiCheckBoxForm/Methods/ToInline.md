# ToInline

Converts the current form to an inline form. Picture form can't be converted to an inline form, it's always a fixed size object.<br>Inherited From: [ApiFormBase#ToInline](../../ApiFormBase/Methods/ToInline.md)

## Syntax

expression.ToInline();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example converts the current form to an inline form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oCheckBoxForm.ToFixed(2 * 240, 1 * 240);
var oCopyForm = oCheckBoxForm.Copy();
oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oCopyForm);
oParagraph.AddText(" Single");
oDocument.Push(oParagraph);
oCopyForm.ToInline();
var bFixed = oCheckBoxForm.IsFixed();
var bFixedCopy = oCopyForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oParagraph.AddLineBreak();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixedCopy);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToInline.docx");
builder.CloseFile();
```