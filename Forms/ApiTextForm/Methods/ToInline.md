# ToInline

Converts the current form to an inline form.
Picture form can't be converted to an inline form, it's always a fixed size object.*

## Syntax

expression.ToInline();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example converts the form to an inline form.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(10 * 240, 2 * 240);
var oCopyForm = oTextForm.Copy();
oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oCopyForm);
oDocument.Push(oParagraph);
oCopyForm.ToInline();
var bFixed = oTextForm.IsFixed();
var bFixedCopy = oCopyForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oParagraph.AddLineBreak();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixedCopy);
oDocument.Push(oParagraph);
```
