# SetAlias

Sets the alias attribute to the current container.

## Syntax

expression.SetAlias(sAlias);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlias | Required | string |  | The alias which will be added to the current inline text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets the alias attribute to the container.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with alias '№1'.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetAlias("№1");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sAlias = oInlineLvlSdt.GetAlias();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Alias: " + sAlias);
oDocument.Push(oParagraph);
```
