1.C标准库<stdio.h>的fopen函数函数原型: FILE *fopen(const char *filename,const char * mode).
2.mode是指文件访问方式.

    r                只读
    r+              读/写
    rb+            读/写二进制文件
    w               只写,文件存在清空文件,文件不存在创建新文件
    w+             读/写,文件存在清空文件,文件不存在创建新文件
    a                追加,文件存在,只能追加数据,文件不存在则创建新文件
    a+              追加/可读
    wb             写二进制
    wb+           读/写二进制
    ab+           追加/读二进制
    wt+           读/写文本
    at+           追加/读文本