# ToInline

Converts the current form to an inline form. Picture form can't be converted to an inline form, it's always a fixed size object.<br>Inherited From: [ApiFormBase#ToInline](../../ApiFormBase/Methods/ToInline.md)

## Syntax

expression.ToInline();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example converts the current form to an inline form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.ToFixed(10 * 240, 2 * 240);
var oCopyForm = oDateForm.Copy();
oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oCopyForm);
oDocument.Push(oParagraph);
oCopyForm.ToInline();
var bFixed = oDateForm.IsFixed();
var bFixedCopy = oCopyForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oParagraph.AddLineBreak();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixedCopy);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToInline.docx");
builder.CloseFile();
```