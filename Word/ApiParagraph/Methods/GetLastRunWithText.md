# GetLastRunWithText

Returns the last Run with text in the current paragraph.

## Syntax

expression.GetLastRunWithText();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example shows how to get the last Run with text in the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let nRunIncrease = 0; nRunIncrease < 5; ++nRunIncrease) {
	var oRun = Api.CreateRun();
	oRun.AddText("This run # " + (nRunIncrease + 1) );
	oParagraph.Push(oRun);
	oParagraph.AddLineBreak();
}
var oLastRun = oParagraph.GetLastRunWithText();
oLastRun.AddText(" Last run.");
```
