# GetParentContentControl

Returns a content control that contains the current paragraph.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiBlockLvlSdt, null

## Example

This example shows how to get a content control that contains the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.Push(oBlockLvlSdt, 0);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph added to the block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
var oParentBlockLvlSdt = oParagraph.GetParentContentControl();
oParentBlockLvlSdt.GetRange(0, 3).SetBold(true);
```
