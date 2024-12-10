# SetAutoFilter

Adds a AutoFilter to the current worksheet.

## Syntax

expression.SetAutoFilter(Field, Criteria1, Operator, Criteria2, VisibleDropDown);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Field | Optional | number |  | The integer offset of the field on which you want to base the filter (from the left of the list; the leftmost field is field one). |
| Criteria1 | Optional |  |  | No description provided. |
| Operator | Optional | [XlAutoFilterOperator](../../Enumeration/XlAutoFilterOperator.md) |  | An XlAutoFilterOperator constant specifying the type of filter. |
| Criteria2 | Optional | string |  | The second criteria (a string). Used with Criteria1 and Operator to construct compound criteria. |
| VisibleDropDown | Optional | boolean |  | True to display the AutoFilter drop-down arrow for the filtered field. False to hide the AutoFilter drop-down arrow for the filtered field. True by default. |

## Returns

This method doesn't return any data.