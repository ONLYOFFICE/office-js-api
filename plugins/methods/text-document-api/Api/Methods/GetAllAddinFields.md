# GetAllAddinFields

Returns all addin fields from the current document.

## Syntax

```javascript
expression.GetAllAddinFields();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[AddinFieldData](../../Enumeration/AddinFieldData.md)[]

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
