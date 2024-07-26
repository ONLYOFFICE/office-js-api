# GetLabel

Returns the label attribute for the current container.

## Syntax

expression.GetLabel();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the label attribute for the container.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
oBlockLvlSdt.SetLabel("2147483647");
oDocument.AddElement(0, oBlockLvlSdt);
var oLabel = oBlockLvlSdt.GetLabel();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Label: " + oLabel);
```
