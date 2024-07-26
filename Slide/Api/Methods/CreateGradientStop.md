# CreateGradientStop

Creates a gradient stop used for different types of gradients.

## Syntax

expression.CreateGradientStop(oUniColor, nPos);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oUniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The color used for the gradient stop. |
| nPos | Required | PositivePercentage |  | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)