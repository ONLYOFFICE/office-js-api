# GetLock

Returns the lock type of the current container.

## Syntax

expression.GetLock();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SdtLock](../../Enumeration/SdtLock.md)

## Example

This example shows hpw to get the lock type of the container.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with the content lock set to it.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetLock("sdtContentLocked");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sLock = oInlineLvlSdt.GetLock();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock type: " + sLock);
oDocument.Push(oParagraph);
```
