# Duplicate

Creates a duplicate of the specified slide layout object, adds the new slide layout to the slide layout collection.

## Syntax

expression.Duplicate(nPos);

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiMaster.GetLayoutsCount() | Position where the new slide layout will be added. |

## Returns

ApiLayout, null