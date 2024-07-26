# RemoveElement

Removes an element using the position specified from the current inline text content control.

## Syntax

expression.RemoveElement(nPos);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position of the element which we want to remove from the current inline text content control. |

## Returns

boolean

## Example

This example removes an element using the position specified from the inline text content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is the first text run in the inline text content control.");
oInlineLvlSdt.AddElement(oRun1, 0);
var oRun2 = Api.CreateRun();
oRun2.AddText("This is the second text run in the inline text content control. The first text run was removed.");
oInlineLvlSdt.AddElement(oRun2, 1);
oInlineLvlSdt.RemoveElement(0);
```
