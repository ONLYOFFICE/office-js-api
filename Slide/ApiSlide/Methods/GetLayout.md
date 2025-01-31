# GetLayout

Returns a layout of the current slide.

## Syntax

```javascript
expression.GetLayout();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) | null

## Example

This example shows how to get a layout of the current slide.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oLayout = oSlide.GetLayout();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
```
