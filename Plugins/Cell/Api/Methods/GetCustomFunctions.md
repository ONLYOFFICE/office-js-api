# GetCustomFunctions

Returns a library of local custom functions.

## Syntax

```javascript
expression.GetCustomFunctions();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

```javascript
window.Asc.plugin.executeMethod ("GetCustomFunctions", null, function (res) {
    console.log ("First custom function: " + res[0])
});
```
