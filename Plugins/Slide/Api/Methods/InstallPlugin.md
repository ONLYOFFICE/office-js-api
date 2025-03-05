# InstallPlugin

Installs a plugin using the specified plugin config.

## Syntax

```javascript
expression.InstallPlugin(config);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| config | Optional | object |  | The plugin &#123;@link https://api.onlyoffice.com/docs/plugin-and-macros/structure/manifest/ config&#125;. |

## Returns

object

## Example

```javascript editor-pptx
window.Asc.plugin.executeMethod ("InstallPlugin", [config], function (result) {
    postMessage (JSON.stringify (result));
});
```
