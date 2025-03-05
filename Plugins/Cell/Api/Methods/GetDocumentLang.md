# GetDocumentLang

Returns the document language.

## Syntax

```javascript
expression.GetDocumentLang();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

```javascript editor-xlsx
window.Asc.plugin.executeMethod("GetDocumentLang", [], function(lang) {
	let documentLang = lang || defaultLang;

	let options = Array.from($('#custom_menu option'));
	let defaultOption = options.find(function(item) {
		if (item.value == defaultLang)
			return item;
	});

	let matchOption = undefined;
	matchOption = options.find(function(item) {
		if (item.value == documentLang)
			return true;
	});
	if (!matchOption) {
		matchOption = options.find(function(item) {
			if (item.value.search(documentLang.split('-')[0]) != -1)
				return true;
		});
	}

	if (!matchOption)
		matchOption = defaultOption;

	if (matchOption) {
		$('#custom_menu').val(matchOption.value);
		$('#custom_menu').trigger('change');
	}
});
```
