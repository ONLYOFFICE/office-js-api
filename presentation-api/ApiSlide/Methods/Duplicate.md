# Duplicate

Creates a duplicate of the specified slide object, adds the new slide to the slides collection.

## Syntax

```javascript
expression.Duplicate(nPos);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetSlidesCount() | Position where the new slide will be added. |

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## Example

This example creates a duplicate of the specified slide object, adds the new slide to the slides collection.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
var oDuplicateSlide = oSlide.Duplicate(1);
```
