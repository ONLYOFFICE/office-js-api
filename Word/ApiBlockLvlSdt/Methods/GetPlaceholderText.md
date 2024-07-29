# GetPlaceholderText

Returns the placeholder text from the current content control.

## Syntax

expression.GetPlaceholderText();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the placeholder text from the content control.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
var sText = oBlockLvlSdt.GetPlaceholderText();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);
```
