# Push

Adds an element to the end of inline text content control.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | DocumentElement |  | The document element which will be added to the end of the container. |

## Returns

boolean

## Example

This example pushes a run to actually add it to the container.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control. ");
oInlineLvlSdt.AddElement(oRun, 0);
oRun = Api.CreateRun();
oRun.AddText("This sentence was pushed here.");
oInlineLvlSdt.Push(oRun);
```
