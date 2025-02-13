# SetLockValue

Sets the lock value to the specified lock type of the current drawing.

## Syntax

```javascript
expression.SetLockValue(sType, bValue);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | Lock type in the string format. |
| bValue | Required | bool |  | Specifies if the specified lock is applied to the current drawing. |

## Returns

bool

## Example

This example sets the lock value to the specified lock type of the shape.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetLockValue("noSelect", true);
var oDocContent = oShape.GetContent();
var bLockValue = oShape.GetLockValue("noSelect");
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This drawing cannot be selected: " + bLockValue);
oDocContent.AddElement(0, oParagraph);
oSlide.AddObject(oShape);
```
