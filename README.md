[babel](https://github.com/cl-babel/babel) をイジって遊ぶためのプロジェクトです。

[01c5e0f359](https://github.com/snmsts/babel/tree/01c5e0f359d70d38147325de92b4c2c4361c66c0) からフォークしています。(プロジェクトは作りなおし)

名前の由来は[バビル二世](https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjz9PDP4a7QAhVEWrwKHQUIA7kQFggdMAA&url=https%3A%2F%2Fja.wikipedia.org%2Fwiki%2F%25E3%2583%2590%25E3%2583%2593%25E3%2583%25AB2%25E4%25B8%2596&usg=AFQjCNFGVoi9iQmDkEiKTQVaYgCP_JKFbg&sig2=hUFKplh2gRnyn5d7x8Y8Fg)からです。

ASDFのシステムとかパッケージとかは babel のままです。その内変更します。

## インストール

```cl
(ql:quickload :babel)
```

## テスト

```cl
(ql:quickload :babel-tests)
(babel-tests:run)
```

## 本家のREADME

Babel is a charset encoding/decoding library, not unlike GNU libiconv, but completely written in Common Lisp.

It strives to achieve decent performance.
To that effect, we use OpenMCL's approach of calculating the destination buffer size in advance.
Most of the encoding/decoding algorithms have been adapted from OpenMCL's source.

Another important goal is reusability.
Similarly to SBCL, we define an interface wherein the algorithms can be reused between a variety of data types so long we're dealing with conversions between octets and unicode code points.

Babel comes with converters between strings and (unsigned-byte 8) vectors but can be easily extended to deal with, e.g., strings and foreign memory, vectors and Closure's runes, etc...

## ライセンス

[LLGPL](http://www.cliki.net/llgpl) にしてもエエんかいな？

COPYRIGHT に従うんかな。
