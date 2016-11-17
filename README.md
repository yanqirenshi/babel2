# BABEL2

[babel](https://github.com/cl-babel/babel) をイジって遊ぶためのプロジェクトです。

[01c5e0f359](https://github.com/snmsts/babel/tree/01c5e0f359d70d38147325de92b4c2c4361c66c0) からフォークしています。(プロジェクトは作りなおし)

名前の由来は[バビル二世](https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjz9PDP4a7QAhVEWrwKHQUIA7kQFggdMAA&url=https%3A%2F%2Fja.wikipedia.org%2Fwiki%2F%25E3%2583%2590%25E3%2583%2593%25E3%2583%25AB2%25E4%25B8%2596&usg=AFQjCNFGVoi9iQmDkEiKTQVaYgCP_JKFbg&sig2=hUFKplh2gRnyn5d7x8Y8Fg)からです。

## 何がしたいの？
文字コード変換でつまづく事があります。

頻度としては少ないですが、躓いたときにそこで諦めることが多いです。  
諦めないにしてもかなり苦労します。

そのため文字コード変換まわりを理解しようと考えています。  
自分なりにバラして組み立てなおすとかしながらゆっくり楽しもうかと。

## 使いかた
babel と変りません。

相違点は以下の二点です。

1. パッケージのニックネームに`b2`を設定しています。
1. string-to-octets と octets-to-string のラッパーを追加しています。<br>基本はそれを利用する方針にしています。

```cl
CL-USER> (defvar *strings* "文字列を文字コードに変換してから、また文字に戻すけぇ。")

*STRINGS*
CL-USER> (b2:string2octets *strings*)

#(230 150 135 229 173 151 229 136 151 227 130 146 230 150 135 229 173 151 227 130 179 227 131 188 227 131 137 227 129 171 229 164 137 230 143 155 227 129 151
  227 129 166 227 129 139 227 130 137 227 128 129 227 129 190 227 129 159 230 150 135 229 173 151 227 129 171 230 136 187 227 129 153 227 129 145 227 129 135
  227 128 130)
CL-USER> (b2:octets2string (b2:string2octets *strings*))
"文字列を文字コードに変換してから、また文字に戻すけぇ。"
```

## インストール

```cl
(ql:quickload :babel2)
```

## テスト

```cl
(ql:quickload :babel2-tests)
(babel2-tests:run)
```

## 今後

処理内容を理解しながらコードを整理していきたいと思います。

パッケージが相互依存しているものとかがあるので、まずそれを解消できるくらいまで行きたいですね。

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
