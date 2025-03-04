# RemoveAllElements

Removes all the elements from the current run.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example removes all the elements from the run.

```javascript editor-xlsx
// How to remove all text elements.

// Create a text run object, add a text to it and clear its content.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oRun.RemoveAllElements();
oRun.AddText("All elements from this run were removed before adding this text.");
oParagraph.AddElement(oRun);
```
