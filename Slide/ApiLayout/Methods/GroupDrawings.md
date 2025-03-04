# GroupDrawings

Groups an array of drawings in the current layout.

## Syntax

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | Required | [DrawingForGroup](../../Enumeration/DrawingForGroup.md)[] |  | An array of drawings to group. |

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md)

## Example

This example shows how to group drawings on layout

```javascript editor-pptx
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oLayout = oSlide.GetLayout();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, oFill1, oStroke);
let oShape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, oFill2, oStroke);
oShape1.SetPosition(608400, 1267200);
oShape2.SetPosition(608400, 1400000);
oLayout.AddObject(oShape1);
oLayout.AddObject(oShape2);
oLayout.GroupDrawings([oShape1, oShape2]);
```
