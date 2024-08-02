window.Asc.plugin.executeMethod("GetDocumentLang", [], function(lang) {
	let documentLang = lang || defaultLang;

	let aOptions = Array.from($('#custom_menu option'));
	let oDefaultOption = aOptions.find(function(item) {
		if (item.value == defaultLang)
			return item;
	});

	let oMatchOption = undefined;
	oMatchOption = aOptions.find(function(item) {
		if (item.value == documentLang)
			return true;
	});
	if (!oMatchOption) {
		oMatchOption = aOptions.find(function(item) {
			if (item.value.search(documentLang.split('-')[0]) != -1)
				return true;
		});
	}

	if (!oMatchOption)
		oMatchOption = oDefaultOption;

	if (oMatchOption) {
		$('#custom_menu').val(oMatchOption.value);
		$('#custom_menu').trigger('change');
	}
});