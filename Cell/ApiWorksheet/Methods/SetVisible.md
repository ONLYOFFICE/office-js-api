# SetVisible

Sets the state of sheet visibility.

## Syntax

expression.SetVisible(isVisible);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isVisible | Required | boolean |  | Specifies if the sheet is visible or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the state of sheet visibility.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");
```
