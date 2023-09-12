# ApplyLayout

Applies the specified layout to the current slide. The layout must be in slide master.

## Syntax

expression.ApplyLayout(oLayout);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oLayout | Required | [ApiLayout](../../ApiLayout/ApiLayout.md) | Layout to be applied. |

## Returns

Boolean (returns false if slide doesn't exist)

## Example

This example applies the specified layout to the slide. The layout must be in slide master.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(4);
oSlide.ApplyLayout(oLayout);
builder.SaveFile("pptx", "ApplyLayout.pptx");
builder.CloseFile();
```