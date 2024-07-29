# GetPlaceholderText

Returns the placeholder text from the current inline content control.

## Syntax

expression.GetPlaceholderText();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the placeholder text from the content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aForms = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
var sText = aForms[0].GetPlaceholderText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);
```
