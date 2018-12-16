var str="   zhang   dong   ";
function rtrim(str){//去掉结尾的控制符
    return str.replace(/\s+$/,"");
}
console.log(`|${rtrim(str)}|`);
function ltrim(str){//去掉开头的空字符
    return str.replace(/^\s+/,"");
}
console.log(`|${ltrim(str)}|`);
function trim(str){//去掉开头和结尾的控制符
    return str.replace(/^\s+|\s+$/ig,"");
}
console.log(`|${trim(str)}|`);








