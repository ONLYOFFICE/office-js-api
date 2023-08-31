# Duplicate

Creates a duplicate of the specified slide object, adds the new slide to the slides collection.

## Syntax

expression.Duplicate(nPos?);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | Position where the new slide will be added. Defalult value is "ApiPresentation.GetSlidesCount()". |

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) &#124; null

## Example

This example creates a duplicate of the specified slide object, adds the new slide to the slides collection.

```javascript
	builder.CreateFile("pptx");
	var oPresentation = Api.GetPresentation();
	var oSlide = oPresentation.GetSlideByIndex(0);
	var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
	var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
	var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
	oSlide.SetBackground(oFill);
	var oDuplicateSlide = oSlide.Duplicate(1);
	builder.SaveFile("pptx", "Duplicate.pptx");
	builder.CloseFile();
```