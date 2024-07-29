# GetStyle

Returns the paragraph style method.

## Syntax

expression.GetStyle();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get the paragraph style.

```javascript
var oDocument = Api.GetDocument();
var oHeading6Style = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParaPr.SetStyle(oHeading6Style);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
var oStyle = oParaPr.GetStyle();
oParagraph.AddLineBreak();
oParagraph.AddText("Style: " + oStyle.GetName());
```
