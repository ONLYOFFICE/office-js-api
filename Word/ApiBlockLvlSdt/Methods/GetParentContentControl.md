# GetParentContentControl

Returns a content control that contains the current content control.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiBlockLvlSdt, null

## Example

This example shows how to get a content control that contains the content control.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt1 = Api.CreateBlockLvlSdt();
oBlockLvlSdt1.GetContent().GetElement(0).AddText("This is a parent block text content control.");
oDocument.AddElement(0, oBlockLvlSdt1);
var oBlockLvlSdt2 = Api.CreateBlockLvlSdt();
oBlockLvlSdt2.GetContent().GetElement(0).AddText("This is a block text content control added in another content control.");
oBlockLvlSdt1.AddElement(oBlockLvlSdt2, 0);
var oParentBlockLvlSdt = oBlockLvlSdt2.GetParentContentControl();
oParentBlockLvlSdt.SetAlias("№1");
```
