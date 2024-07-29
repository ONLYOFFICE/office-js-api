# ChangeEffectStyles

**Need to do**Sets the effect styles to the current theme format scheme.

## Syntax

expression.ChangeEffectStyles(arrEffect);

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrEffect | Required | Array |  | The array of effect styles must contain 3 elements - subtle, moderate and intense fills.If an array is empty or NoFill elements are in the array, it will be filled with the Api.CreateStroke(0, Api.CreateNoFill()) elements. |

## Returns

boolean

## Example

This example

```javascript
// todo_example It's not implemented yet.
```
