# SetLockValue

Sets the lock value to the specified lock type of the current drawing.

## Syntax

expression.SetLockValue(sType, bValue);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | Lock type in the string format. |
| bValue | Required | bool |  | Specifies if the specified lock is applied to the current drawing. |

## Returns

bool

## Example

This example sets the lock value to the specified lock type of the current drawing.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oDrawing.SetLockValue("noSelect", true);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetContent();
var bLockValue = oDrawing.GetLockValue("noSelect");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This drawing cannot be selected: " + bLockValue);
oDocContent.AddElement(0, oParagraph);
```
