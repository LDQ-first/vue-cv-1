 /*这是一个 Node.js 脚本，并没有被 webpack 打包，
 所以我们不能使用 import path from 'path'*/

const path = require('path'); // 路径工具
const fs = require('fs');     // 文件系统工具

let svgFolder = path.join(__dirname, '../static/svg_icons');
let jsPath = path.join(__dirname, '../src/assets/icons.js');

// [ 'add.svg', 'book.svg', 'cup.svg', 'heart.svg', 'id.svg', 'phone.svg', 'work.svg' ]
let svgFiles = fs.readdirSync(svgFolder); 

let symbols = svgFiles.map(function(filename) {
    let absolutePath = path.join(svgFolder, filename);
    let fileContent = fs.readFileSync(absolutePath).toString('utf8');
    let name = path.basename(filename, '.svg');
    return fileContent
        .repalce()
})

