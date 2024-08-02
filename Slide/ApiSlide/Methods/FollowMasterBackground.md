# FollowMasterBackground

Sets the master background as the background of the slide.

## Syntax

expression.FollowMasterBackground();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example sets the master background as the background of the slide.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oLayout.SetBackground(oFill);
oSlide.FollowMasterBackground();
```
