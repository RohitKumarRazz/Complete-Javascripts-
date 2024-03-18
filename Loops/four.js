const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift si'
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ["js", "java", "py", "rb"]
for (const key in prog) {
    //console.log(prog[key]);
}

const map = new Map()
map.set('In', "India")
map.set('Usa', "United state of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(map[key]);
}


