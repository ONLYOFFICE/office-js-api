# RemoveFieldWrapper

Removes a field wrapper, leaving only the field content.

## Syntax

```javascript
expression.RemoveFieldWrapper(fieldId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | Optional | string |  | Field ID. If it is not specified, then the wrapper of the current field is removed. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("GetAllAddinFields", null, function(fields) {
	let count = 0;
	fields.forEach(function(field) {
		if (field.Value.includes(bibPrefix) || field.Value.includes(citPrefix)) {
			count++;
			window.Asc.plugin.executeMethod("RemoveFieldWrapper", [field.FieldId], function() {
				count--;
				if (!count)
					window.Asc.plugin.executeCommand("close", "");
			});
		}
	});

	if (!fields.length)
		window.Asc.plugin.executeCommand("close", "");
});
```
