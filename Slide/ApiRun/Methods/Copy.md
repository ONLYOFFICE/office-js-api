# Copy

Creates a copy of the current run.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example reates a copy of the run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is just a sample text that was copied. ");
oParagraph.AddElement(oRun1);
var oRun2 = oRun1.Copy();
oParagraph.AddElement(oRun2);
```
