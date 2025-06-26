# GetFields

Returns all fields as a text.

## Syntax

```javascript
expression.GetFields();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetFields", null, function (res) {
    console.log ("First field: " + res[0])
});
```
