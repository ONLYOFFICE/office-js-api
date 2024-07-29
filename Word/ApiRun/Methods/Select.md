# Select

Selects the current run.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example selects the current run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun.Select();
oParagraph.AddLineBreak();
oParagraph.AddText("The text from the first run was selected.");
```
