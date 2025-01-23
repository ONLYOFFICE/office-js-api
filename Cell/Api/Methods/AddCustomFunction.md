# AddCustomFunction

Creates a new custom function.
The description of the function parameters and result is specified using JSDoc. The &lt;em&gt;@customfunction&lt;/em&gt; tag is required in JSDoc.
Parameters and results can be specified as the &lt;em&gt;number / string / bool / any / number[][] / string[][] / bool[][] / any[][]&lt;/em&gt; types.
Parameters can be required or optional. A user can also set a default value.

## Syntax

expression.AddCustomFunction(fCustom);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fCustom | Required | function |  | A new function for calculating. |

## Returns

This method doesn't return any data.