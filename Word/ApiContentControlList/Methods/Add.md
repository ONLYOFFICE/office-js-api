# Add

Adds a new value to the combo box / dropdown list content control.

## Syntax

expression.Add(sText, sValue, nIndex);

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The display text for the list item. |
| sValue | Optional | string | sText | The list item value. |
| nIndex | Optional | number | this.GetElementsCount() | A position where a new value will be added. |

## Returns

boolean