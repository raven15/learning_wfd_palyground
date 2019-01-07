// 一般通用编写方法
const gulp = require('gulp'); //初始化gulp工具

gulp.task('clean', function () {
    // TODO: 删除编译生成的文件
    console.log('clean func')
});


// 官方示例中的编写方法
const {src, dest} = require('gulp'); //初始化gulp工具
const less = require('gulp-less'); //初始化less插件

function compile() {
    console.log('complie func')
    return src('src/**/*.less')
        .pipe(less()) //编译 less 文件任务
        .pipe(dest('dist')) // 输出编译完成的文件到指定目录
}

function build() {
    console.log('build func')
    compile()
    // TODO: 构建项目
}

exports.default = build
