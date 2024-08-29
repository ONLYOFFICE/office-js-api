# AddFields

Adds row, column, and page fields to a PivotTable report.

## Syntax

expression.AddFields(options, options.rows, options.columns, options.pages, options.addToTable);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Required | Object |  | No description provided. |
| options.rows | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | Specifies an array of field names or ids to be added as rows or added to the category axis. |
| options.columns | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | Specifies an array of field names or ids to be added as columns or added to the series axis. |
| options.pages | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | Specifies an array of field names or ids to be added as pages or added to the page area. |
| options.addToTable | Optional | boolean |  | Applies only to PivotTable reports. True to add the specified fields to the report (none of the existing fields are replaced). False to replace existing fields with the new fields. The default value is False. |

## Returns

This method doesn't return any data.