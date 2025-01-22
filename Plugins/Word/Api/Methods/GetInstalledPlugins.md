# GetInstalledPlugins

Returns all the installed plugins.

## Syntax

expression.GetInstalledPlugins();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PluginData[]](../../Enumeration/PluginData.md)

## Examples

**Example 1:**

```javascript
window.Asc.plugin.executeMethod ("GetInstalledPlugins", null, function (result) {
    postMessage (JSON.stringify ({type: 'InstalledPlugins', data: result }));
});
```
