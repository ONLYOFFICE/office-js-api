# CreateSlide

Creates a new slide.

## Syntax

```javascript
expression.CreateSlide();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

This example creates slide and inserts it into the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
```
