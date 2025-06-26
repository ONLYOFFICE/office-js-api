# GetFormValue

Returns a value of the specified form.

## Syntax

```javascript
expression.GetFormValue(internalId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | Required | string |  | A unique internal identifier of the form. |

## Returns

null \| string \| boolean

## Example

```javascript
window.Asc.plugin.executeMethod ("GetFormValue", ["1_713"], function (res) {
    console.log (res)
});
```
