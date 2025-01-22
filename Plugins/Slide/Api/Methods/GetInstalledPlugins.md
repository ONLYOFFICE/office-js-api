# GetInstalledPlugins

Returns all the installed plugins.

## Syntax

expression.GetInstalledPlugins();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PluginData[]](../../Enumeration/PluginData.md)

## Example

```javascript
window.Asc.plugin.executeMethod ("GetInstalledPlugins", null, function (result) &#123;
    postMessage (JSON.stringify (&#123;type: 'InstalledPlugins', data: result &#125;));
&#125;);
