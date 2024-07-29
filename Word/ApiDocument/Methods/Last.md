# Last

Returns the last document element.

## Syntax

expression.Last();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

This example shows how to get the last document element.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text №1.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text №2.");
oDocument.Push(oParagraph);
var oElement = oDocument.Last();
oElement.SetBold(true);
```
