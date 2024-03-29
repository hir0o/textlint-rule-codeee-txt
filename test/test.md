# Python

- Python とは
- Python で何が出来るか
- 基本的な書き方
- コメントアウト

---

## Python とは

### 概要

Python の概要について学習しましょう。

### 経験値

100

### 本文

<!-- ＠TODO
img-host.wemotion.co.jpをcodeeeのCDNに変更（外部の著作物である画像はリライトが必要） -->
<img src="https://img-host.wemotion.co.jp/uploads/c-python/logo-python.png" width="500">

Python とは、1991 年にオランダ人の Guido van Rossum（グイド・ヴァン・ロッサム）氏が開発した `オブジェクト指向スクリプト言語` です。

同じオブジェクト指向言語には `Ruby` や `PHP` などの言語があります。

`Python = AI` のようなイメージを持ってる方が多いとは思いますが、AI を作るためだけの言語というわけではなく、`Webアプリケーション開発` や `データ処理/解析` などができる汎用的な言語となります。また開発効率がよく、素早く開発ができるといった特徴もあります。

Python は読みやすくてシンプルなので、比較的簡単で習得しやすい言語の一つになります。少ないコード量でプログラムが書くことができるので読み間違えや書き間違えが発生しにくい点や、Python を知らない人でも理解しやすいように設計されている点が開発効率の向上に寄与しています。

### 問題

Python が開発された年代を選択してください。

- [ ] 1970 年代
- [ ] 1980 年代
- [x] 1990 年代
- [ ] 2000 年代

### 解説

Python が最初に開発されたのは 1991 年の`1990年代`です。
そこから改善を経て、2008 年に 3 系がリリースされました。

---

## Python で何が出来るか

### 概要

Python で何ができるのか学習しましょう。

### 経験値

100

### 本文

先述したように、Python は汎用的な言語なのでできることは沢山ありますが、ここでは代表的なものを紹介します。

### データ処理や解析

Python には **_NumPy_**、**_SciPy_** などの高速な数値計算ライブラリが存在しているため、データ処理やデータ解析によく用いられることがあります。
例えば、大きなデータを高速に集計・解析したり、グラフをプロットするプログラムを書くといったことができます。

### フレームワークを使用した Web アプリケーションの構築

Python の代表的な Web アプリケーション フレームワークには、`Django(ジャンゴ)` や `Flask（フラスコ/フラスク）` と言ったフレームワークがあり、Web アプリケーションの開発でよく使用されています。

Django は Web アプリ開発に特化したフルスタックなフレームワークで大規模な開発に向いている一方、Flask は小規模な開発に向いています。

他にも Python はシステムの開発やゲームプログラミングができます。

### 問題

Python を活用することが適した開発内容を選択してください。

- [ ] iOS アプリの開発
- [ ] Android アプリの開発
- [x] データ処理/解析

### 解説

Python を活用することが適した開発内容は`データ処理/解析`です。
`Django`や`Flask`を活用することで、Web アプリケーションや API の開発にも適しています。

---

## 基本的な書き方

### 概要

実際にプログラムを書いて実行してみましょう。

### 経験値

100

### 本文

実際に Python を書いて実行してみましょう。
エディタに Python のコードを書いて、ターミナル（Windows の方はコマンドプロンプト、又は PowerShell）で実行という流れで進めていきましょう。

それでは Python の基本的な書き方について学んでいきましょう。
任意の場所に `/python` ディレクトリを作成し、その中に `test.py` というファイルを作成してください。
Python は、インデントに意味を持つ言語なので各行でのインデントには気をつけましょう。

`print()` という関数を使用することで文字列や数値を出力することができます。引数に出力したい文字列および数値を与えましょう。

```python:test.py
print("Hello, Python!")
print(1)
```

書いたコードを実行するためには、シェルなどから

```shell
$ python 実行ファイル名
```

とすることで Python ファイルが実行されます。

```shell
$ python test.py
Hello, Python!
1
```

### 問題

以下の実行結果を出力するために適切なコードを選択してください。

```
Hello python!
```

- [ ] printf("Hello python!")
- [ ] print "Hello python!"
- [x] print("Hello python!")
- [ ] print(Hello python!)

### 解説

出力するコードとして正しいのは、`print("Hello python!")` です。
Python では、print()メソッドで実行結果を出力することができます。
また、今回は文字列を出力させるとのことでしたので、`""`ダブルクォーテーションでしたが、数値の場合は必要ないので注意してください。

---

## コメントアウト

### 概要

変数について学習しましょう。

### 経験値

100

### 本文

ソースコードの中にコメントやメモを残しておきたい場合は、コメントアウトを使用して記述しましょう。`#` を使うと以降の文字がコメントアウトされます。

```python
print('Hello, python') # これはコメントです
```

複数行をコメントアウトしたい場合は、以下のように記述します。

```python
print("Hello python") # 実行される

"""
これはコメントです
これはコメントです
これはコメントです
"""

print("Hello codeee") # 実行される
```

### 問題

Python でコメントアウトに使用する記号を選択してください。

- [ ] /\*\*/ コメントアウト
- [x] # コメントアウト
- [ ] // コメントアウト
- [ ] ＄ コメントアウト

### 解説

Python でコメントアウトに使用する記号は `#` です。
`/**/`, `//`, `$` などの記号はプログラミングを学んでいくとどこかで使用する機会があると思うので楽しみにしててください。

---
