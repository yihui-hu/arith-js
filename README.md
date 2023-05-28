# arith

![arith_cover](https://user-images.githubusercontent.com/90987235/204076046-b4c28139-859f-4569-8866-43dacf0869be.jpg)

## Background

arith began as a CLI image compressor / decompressor that my friend Toby and I built in C[^1] for a [college class](https://github.com/yihui-hu/cs40).  

I subsequently ported the C code over to JavaScript so it could [run on the web](https://arith.vercel.app)!

## About arith

arith takes in a [.ppm](https://netpbm.sourceforge.net/doc/ppm.html) image file and compresses it by as much as 60%. It also supports decompressing arith-compressed .ppm images.  

Understandably, ppm is not a common format for storing images, but there are many tools online that can convert jpg / png images into ppm files, such as [this one](https://convertio.co/png-ppm/) that is also linked on the website, so feel free to play around with your own images!

[^1]: Because this project contains source code adapted from coursework, ```src/js``` is symbolic link to a private repo containing the actual JavaScript files. If you'd like to see the source code, please contact me via yyihui.hu (at) gmail (dot) com.