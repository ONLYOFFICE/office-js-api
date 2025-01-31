# Ungroup

Ungroups the current group of drawings.

## Syntax

```javascript
expression.Ungroup();
```

`expression` - A variable that represents a [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to ugroup a group drawing element.

```javascript
let oWorksheet = Api.GetActiveSheet();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill1, oStroke, 0, 2 * 36000, 0, 3 * 36000);
let oShape2 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill2, oStroke, 0, 15 * 36000, 0, 30 * 36000);

let oGroup = oWorksheet.GroupDrawings([oShape1, oShape2]);
oGroup.Ungroup();

let oDocContent1 = oShape1.GetDocContent();
let oParagraph1 = oDocContent1.GetElement(0);
oParagraph1.AddText("Shapes are ungrouped");

let oDocContent2 = oShape2.GetDocContent();
let oParagraph2 = oDocContent2.GetElement(0);
oParagraph2.AddText("Shapes are ungrouped");

```
