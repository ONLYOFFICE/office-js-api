# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

expression.CreateStroke(nWidth, oFill);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | EMU |  | The width of the shadow measured in English measure units. |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to create the shadow. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)