# PivotTableFieldOptions

The settings for adding row, column, and page fields to the pivot table report.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| addToTable | boolean | Specifies whether to apply fields only to the pivot table reports. If `true`, the specified fields will be added to the report \nwithout replacing existing fields. If `false`, existing fields will be replaced with the new fields. |
| columns | number \| string \| number[] \| string[] | An array of field names or IDs to be added as columns or added to the series axis. |
| pages | number \| string \| number[] \| string[] | An array of field names or IDs to be added as pages or added to the page area. |
| rows | number \| string \| number[] \| string[] | An array of field names or IDs to be added as rows or added to the category axis. |
