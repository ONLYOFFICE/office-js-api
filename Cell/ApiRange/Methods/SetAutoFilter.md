# SetAutoFilter

Adds an AutoFilter to the current range.

## Syntax

```javascript
expression.SetAutoFilter(Field, Criteria1, Operator, Criteria2, VisibleDropDown);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Field | Required | number |  | The integer offset of the field on which you want to base the filter (from the left of the list; the leftmost field is field one). |
| Criteria1 | Required | string | string[] | [ApiColor](../../ApiColor/ApiColor.md) | [XlDynamicFilterCriteria](../../Enumeration/XlDynamicFilterCriteria.md) |  | The criteria (a string; for example, "101"). Use "=" to find blank fields, "&lt;&gt;" to find non-blank fields, and "&gt;&lt;" to select (No Data) fields in data types. If this argument is omitted, the criteria is All. If Operator is xlTop10Items, Criteria1 specifies the number of items (for example, "10"). |
| Operator | Required | [XlAutoFilterOperator](../../Enumeration/XlAutoFilterOperator.md) |  | An XlAutoFilterOperator constant specifying the type of filter. |
| Criteria2 | Required | string |  | The second criteria (a string). Used with Criteria1 and Operator to construct compound criteria. |
| VisibleDropDown | Required | boolean |  | True to display the AutoFilter drop-down arrow for the filtered field. False to hide the AutoFilter drop-down arrow for the filtered field. True by default. |

## Returns

This method doesn't return any data.