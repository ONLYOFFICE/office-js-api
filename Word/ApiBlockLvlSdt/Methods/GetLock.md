# GetLock

Returns the lock type of the current container.

## Syntax

expression.GetLock();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SdtLock](../../Enumeration/SdtLock.md)

## Example

This example shows how to get the lock type of the container.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
oBlockLvlSdt.SetLock("sdtContentLocked");
oDocument.AddElement(0, oBlockLvlSdt);
var oLock = oBlockLvlSdt.GetLock();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Lock type: " + oLock);
```
