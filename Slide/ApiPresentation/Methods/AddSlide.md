# AddSlide

Appends a new slide to the end of the presentation.

## Syntax

expression.AddSlide(oSlide);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSlide | Required | [ApiSlide](../../ApiSlide/ApiSlide.md) |  | The slide created using the &#123;@link Api#CreateSlide&#125; method. |

## Returns

This method doesn't return any data.

## Example

This example appends a new slide to the end of the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
```
