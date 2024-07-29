# GetAlias

Returns the alias attribute for the current container.

## Syntax

expression.GetAlias();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example showh how to get the alias attribute for the container.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with alias '№1'.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetAlias("№1");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oAlias = oInlineLvlSdt.GetAlias();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Alias: " + oAlias);
oDocument.Push(oParagraph);
```
