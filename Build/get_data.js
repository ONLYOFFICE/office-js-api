let table = document.getElementsByTagName('table')[1]
let arrRows = table.children[1].children
let arr1 = []
let arr2 = []
let arr3 = []
for (let index = 0; index < arrRows.length; index++) {
    let row = arrRows[index].children;
    debugger
    arr1.push(row[0].firstChild.innerText.replace(/"/g,'\"'))
    arr2.push(row[1].firstChild.innerText.replace(/"/g,'\"'))
}

console.log('methods_arr = ["' +arr1.join('","') + '"]')
console.log('methods_description_arr = ["' +arr2.join('","') + '"]')







table = document.getElementsByTagName('table')[1]
arrRows = table.children[1].children
for (let index = 0; index < arrRows.length; index++) {
    let row = arrRows[index];
}
arr1 = []
arr2 = []
arr3 = []
for (let index = 0; index < arrRows.length; index++) {
    let row = arrRows[index].children;
    arr1.push(row[0].firstChild.innerText || row[0].firstChild.textContent.replace(/"/g,'\"'))
    arr2.push(row[1].firstChild.innerText || row[1].firstChild.textContent.replace(/"/g,'\"'))
	arr3.push(row[2].firstChild.innerText || row[2].firstChild.textContent.replace(/"/g,'\"'))
}

console.log('properties_arr = ["' +arr1.join('","') + '"]')
console.log('properties_type_arr = ["' +arr2.join('","') + '"]')
console.log('properties_description_arr = ["' +arr3.join('","') + '"]')