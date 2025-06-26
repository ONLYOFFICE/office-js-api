# OpenFile

Opens a file with fields.

## Syntax

```javascript
expression.OpenFile(binaryFile, fields);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| binaryFile | Required | Uint8Array |  | A file in the format of the 8-bit unsigned integer array. |
| fields | Required | string[] |  | A list of field values. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("OpenFile", [[Uint8Array], ["id", "name"]]);
```
