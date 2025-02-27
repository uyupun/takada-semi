# 前回までの振り返り

- 前々回、ダグラス・エンゲルバートの経歴について扱った
- そして前回、ダグラス・エンゲルバートが影響を受けた『As We May Think』という論文や、それを著したヴァネヴァー・ブッシュについても取り扱った
- 今回はダグラス・エンゲルバートが開発したシステムや、その他のこぼれ話について取り扱う

# 続・ダグラス・エンゲルバートのサーベイ

## ダグラス・エンゲルバートのマウス

- 当時はマウスという名前はなかった
- 実際に開発したのはビル・イングリッシュ
    - ダグラス・エンゲルバートはアイデアを出した

![](https://upload.wikimedia.org/wikipedia/commons/c/cc/SRI_Computer_Mouse.jpg)
![](https://pc.watch.impress.co.jp/docs/2003/1016/logi209.gif)
![](https://pc.watch.impress.co.jp/docs/2003/1016/logi210.gif)
![](https://pc.watch.impress.co.jp/docs/2003/1016/logi211.gif)

- 特徴
    - 裏面にX軸、Y軸のローラーが付いている
    - ボタンは１つ
    - 木製の箱に収められている

![](https://pc.watch.impress.co.jp/docs/2003/1016/logi207.gif)
![](https://pc.watch.impress.co.jp/docs/2003/1016/logi212.gif)
![](https://pc.watch.impress.co.jp/docs/2003/1016/logi213.gif)

- 初期のマウスは形に標準的なものがなかったことが伺える
    - 今もエルゴノミクスマウスとか面白い形してるけどね
- ボール式、光学式との比較をしてみても面白いかもしれない

## FLTS

- NLSの前身
- Off-Line Text System
- 研究で使用できるコンピュータがCDC 160Aという当時基準でも貧弱なものだった
- そのため、オフラインで利用できるシステムを開発
- パンチカードへの入力を支援するようなシステムで、編集コマンドとテキストを紙テープに入力すると編集後のテキストが紙テープとして出力される
    - リアルタイムで編集を行えないインタフェースということで、UNIXの原始的なテキストエディタであるedのハードウェア版のようなイメージ
- ちなみにこの時代のオンライン、オフラインとは通信回線が繋がっているという意味ではなく、計算機にリアルタイムに直接的にデータを入力できるかということだった

## NLS

- ワードプロセッシング、アウトライン処理、ウィンドウシステム、ハイパーリンク、リモートネットワーク、画面共有、ビデオ会議、マウスによる入力、マルチメディア、電子メール等、様々な機能を備えていた
- CDC 3100やSDS 940という当時の高性能なコンピュータが手に入ったこともあり開発開始
- 最大16台のワークステーションを接続可能
- 入力にはChord Keysetという今日ではあまり見られない入力装置も使われていた
    - 片手で操作する5キーのキーパッドで、複数のキーを同時に押すことで異なる文字やコマンドを入力
    - このインタフェースに関してはそのうち詳しく扱いたい
- Journal
    - NLSに実装された最も革新的な機能のひとつ
    - ハイパーテキストベースのグループウェア
    - デビッド・エヴァンスの博士論文の一部として開発された
- THREE-META
    - NLSの開発で利用されていたDSL(ドメイン固有言語)のパーサジェネレータ
- L10
    - NLSの開発で利用されていたDSL
- NLSのその後
    - SRIとARPANETが接続され、分散コンピュータの時代になった
    - そのため、NLSのように少人数でTSSを使うようなシステムは時代遅れになっていった
    - NLSはその後、PDP-10(という当時の名作コンピュータ)への移植が行われた
    - しかし、NLSをSRI外に広めたり、インターネットで使えるように進化させていくということは起きなかった

## すべてのデモの母

- 国際会議のFJCC(Fall Joint Computer Conference)でダグラス・エンゲルバートによるNLSやマウスのデモが行われた
- これが伝説的なデモとされ、「すべてのデモの母」と呼ばれている
- 1000人の聴衆の中にはアラン・ケイもいた
    - アラン・ケイは後にOOPの発展やノートPCの普及、GUIの発展に大きな影響を与える

## Augment

- 1977年、SRIはTymshare社にNLSを売却
    - Tymeshare社はTSSの提供事業を行っていた
- その後、NLSはAugmentと改名され、継続して開発された
- 1984年、Tymeshare社がマクドネル・ダグラス社に買収
    - マクドネル・ダグラス社は航空宇宙企業で、後にボーイング社に買収されている

## HyPerform

- N・ディーン・マイヤー
    - 1968年にSRIのARCにてダグラス・エンゲルバートの元で研究を始める
    - 1976年にXerox PARCに移籍し、マーケティングや戦略的計画のためのツールの開発を行う
    - 1982年にNDMAを設立し、組織戦略や管理に関するコンサルティングを行う
        - NDMAはN. Dean Meyer and Associatesの略
- ここでダグラス・エンゲルバートのNLS/Augmentの意思を継いだHyPerformを開発
    - NLS/Augmentに比べ、より直感的なインタフェース(GUI)を採用した他、当時の動作環境に合わせたモダナイズ、カスタマイズ性の向上等が行われた
    - 具体的な開発時期は不明だが、1982年にNDMAが設立されたことやAugmentの開発時期を鑑みると、1980年代後半以降だと思われる

## OHS

- Open Hyperdocument System(OHS)
    - NLS/Augmentの後継
    - ダグラス・エンゲルバートが1990年代〜構想を始めた
    - 現在のWebをより柔軟なハイパーリンクという視点で捉え直したようなシステム
    - NLS/Augmentではワークステーションが繋がった閉じたネットワーク環境を想定していたが、OHSではインターネットを想定している
    - ファイルやアプリを超えたリンクが可能
        - これは前回の発表でちょうど「こういうものがあったらいいな」と言っていた
    - 文書中の特定の段落、単語レベルでのリンクが可能
        - これはHTMLのid属性で部分的には実現できている
        - Google Chromeでは文字を選択し、右クリックすると「選択箇所へのリンクをコピー」という機能が利用できる
    - 逆リンクされる
        - GitHub IssueとかScrapboxでも実現されているイメージ
    - ビューの変更(文書を目次、詳細、一部といった異なる視点から見る機能)
    - Webはホームページやサービス、プラットフォームの提供という本来の目的から外れた用途になってしまったが、OHSではより正当に集合知を活用するための仕組みを提供するという目的があった
    - 結局、完全な実装がリリースされることはなかった
- HyperScope
    - OHSの部分的な実装
    - 2006年にリリース
    - プロトタイプ的な位置付けで、既存のWeb技術を用いて実装されており、ブラウザ(Firefox、IE)での動作が可能
        - Dojo Toolkit、OPML(Outline Processor Markup Language)
        - Dojo Toolkitは2004年にリリースされ、UI、Ajax、イベント処理の機能を備えていた
        - OPMLはXMLベースのフォーマットで、RSSのフィード管理にも使われている
        - ちなみにjQueryは2006年リリースなので、Dojo Toolkitはかなり古いことが分かる
    - OHSは既存のWeb技術(HTTP/HTML等)から脱却し、プロトコルレベルでの再設計を行う想定だった
        - Webの再実装みたいなトピックの研究とか探してみても面白いかもしれない
- ダグラス・エンゲルバートの死後、これらの技術の開発は停止している

## Hyperwords

- 2006年にリリースされたMozilla Firefox等のWebブラウザ向けのアドオン
- NLSやAugmentの思想を受け継いでおり、Liquid Informationというプロジェクトの一環で開発された
    - Liquid Informationはフローデ・ヘグランド氏が主導する情報の操作性とユーザーインターフェースの革新を目指した取り組み
- ユーザがウェブページ上のテキストを選択すると、検索、参照、翻訳、メール送信等の様々な操作が可能
- ロンドン大学での研究プロジェクトとして開始
- その後、The Hyperwords Companyで開発・維持
    - 2012年にThe Liquid Information Companyに改名
    - その後、The Augmented Text Companyに改名
- 2012年に開発終了した
- Liquid InformationではLiquid、Liquid Browserとった他のソフトウェアも開発されていた
- ダグラス・エンゲルバート、テッド・ネルソン、ヴィントン・サーフ等の名だたる人物がアドバイザーとして参加していた
- フローデ・ヘグランドの取り組みについて掘り下げてみても面白いかも

## ダグラス・エンゲルバートとLogitech

- 晩年、ダグラス・エンゲルバートはLogitech(日本法人はロジクール)の本社一角に作業スペースを持っていた
    - これは自社の事業に大きな影響を与えたダグラス・エンゲルバートに敬意を払ってのことだそう
- Logitech
    - 現在、キーボード、マウス、ゲーミングデバイス等を手掛ける企業
    - 1981年にスイスで創業
    - 創業当時はソフトウェア開発を行っていた
    - マウス事業の早期参入企業で、後にマウス市場のリーダー的存在となる
    - 1984年に参入後、しばらくはHPやApple、SunのOEMを行っていたが、1986年からリテール製品を販売開始
    - Windows 95の登場と共に広く普及した
        - Windows 95は直感的なGUI、プラグアンドプレイ、TCP/IPプロトコルサポート、Windows初の32ビットOS、Microsoft Officeとの統合、強力なマーケティング戦略等の理由から爆発的に普及した
- ダニエル・ボレル
    - Logitechの共同創業者
    - 1950年生まれ(第二次世界大戦後)
- ロジクールとLogitechの関係
    - 日本法人がLogitechではなくロジクールなのは、すでに同名の企業が存在したため

## ダグラス・エンゲルバートの哲学

- 「自然なものなど存在せず、自然なものというのは単に慣れ親しんでいるものにすぎない」
    - ペンで字を書けたり、自転車で移動できるのもたくさん練習したから
    - とはいえ人間が先天的、あるいは幼少期に獲得する能力かどうか？という視点は大事なように思う
    - それに対し、人種や障害、年齢による影響がどれくらいあるのか？という視点も大事なように思う
- 何に慣れ親しむか、というのも社会の環境や見方、観衆によって定義され、それは時代とともに進化していく
    - 実際にマウスも微妙に進化しているし、トラックパッドやトラックボールのような類似の入力装置も出現している
- そのため、その時点におけるモノの特性や性能の把握、将来性への注目が重要

## ダグラス・エンゲルバートを超えて

- ダグラス・エンゲルバートは2006年の時点で、1950年代に考えたアイデアまで全然到達できていないと言っている
    - 実際にそうだったと思う
- しかしそこから20年弱経過し、2025年になった
    - ダグラス・エンゲルバートが当時予測していなかったAIの進化、5GやIoTによるロボティクスの時代の幕開け

# 余話①: ディスプレイのサイズについて

- ディスプレイ
    - PCは横長
        - 人間の視覚特性に合わせていると言われている
    - スマホは縦長
        - 片手での操作のしやすさ等が理由と言われている
    - 今日の代表的な二種類の端末のモニタのサイズが身体の異なる特性に影響を受けているのは面白い
    - PCとスマホでデザインが変わることが一般化しているし、PCでは横長のレイアウトを採用するのも悪くないのでは？

# 余話②: 殴り書きについて

- 印刷/見栄えが前提のレイアウト
    - そうでないサービスも増えてきた
    - Miro、FigJam等のサービスはあるが紙のように自由に書けるかというとまだそんなことはない
    - サービスとしても個人的な雑多なメモを想定している感じはあまりしない
    - スタイラスによる入力が一般的でない、もしくはマウスよりも精密な入力が可能なデバイスが現状、存在していないことが問題なのかもしれない
- 一画面という制約
    - これは最近は少なくなってきたような感じがする
    - 広大な空間を拡大と縮小できることで克服した
    - ただ、現実の紙のように柔軟に並び替えたりすることはできない
- Extended Paper
    - 思いつくままに適当に放り込んだオブジェクトが、時系列を考慮した上で解析され、それなりに美しくまとめられ、出力される、くらい突飛なことをしてくれる紙でも良いのかもしれない
    - 生成AIとかでできそう？
    - 生成AIを使用してパワポを作ってくれるサービスも出ている
- たかしがお絵かきアプリを作っていたのでやってくれると信じている

# 感想

- Webに至るまで、様々なシステムが開発され、朽ち果て、そこでの反省が新たなシステムに繋がっていく
- ダグラス・エンゲルバートの論文は読めていないが、少しずつ時代を進めていこうと思う

# 参考文献

- [マウスの父、ダグラス・エンゲルバート氏インタビュー ～過去の点を結んだ線は、未来に渡る橋になる](https://pc.watch.impress.co.jp/docs/2006/0322/engelbart.htm)
- [コンピューターの個人化 と Douglas Carl Engelbart （ダグラス・エンゲルバート）を超えて](https://note.com/masayamori/n/n8ba97c1d8aef)
- [Web思考プロセッサ HyperScope 1.0 - Douglas Engelbart博士のアイデア結実](https://web.archive.org/web/20120201015321/http://news.mynavi.jp/news/2006/09/07/345.html)
- [Logitechの創業者、マウス5億台出荷までの軌跡を語る ～歴代製品やエンゲルバートのマウスを展示](https://pc.watch.impress.co.jp/docs/2003/1016/logi2.htm)
- [紙の呪縛](https://pc.watch.impress.co.jp/docs/2004/0910/config017.htm)
- [すべてのデモの母](https://ja.wikipedia.org/wiki/%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%83%87%E3%83%A2%E3%81%AE%E6%AF%8D)
- [マウスやGUI、ハイパーリンクの生みの親D・エンゲルバート氏、88歳で死去](https://japan.cnet.com/article/35034255/)
- [NLS](https://ja.wikipedia.org/wiki/NLS)
- [Hyperwords](https://en.wikipedia.org/wiki/Hyperwords)

# 今後サーベイしたいこと

- [As We May Think](https://en.wikipedia.org/wiki/As_We_May_Think)
- [ファイル検索および編集システム](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E6%A4%9C%E7%B4%A2%E3%81%8A%E3%82%88%E3%81%B3%E7%B7%A8%E9%9B%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
- [Hypertext Editing System](https://ja.wikipedia.org/wiki/Hypertext_Editing_System)
- [ジェフ・ルリフソン](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%95%E3%83%BB%E3%83%AB%E3%83%AA%E3%83%95%E3%82%BD%E3%83%B3)
- [テッド・ネルソン](https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%83%E3%83%89%E3%83%BB%E3%83%8D%E3%83%AB%E3%82%BD%E3%83%B3)
- [ヴィントン・サーフ](https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%88%E3%83%B3%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%95)
- [ロバート・テイラー (情報工学者)](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%90%E3%83%BC%E3%83%88%E3%83%BB%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC_(%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E8%80%85))
- [アンドリーズ・ヴァン・ダム](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AA%E3%83%BC%E3%82%BA%E3%83%BB%E3%83%B4%E3%82%A1%E3%83%B3%E3%83%BB%E3%83%80%E3%83%A0)
- [コミュニティメモリ](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%A1%E3%83%A2%E3%83%AA)
- [RFC 543 Network journal submission and delivery](https://datatracker.ietf.org/doc/html/rfc543)
- [Rollkugel](https://en.wikipedia.org/wiki/Rollkugel)
- [Alto](https://ja.wikipedia.org/wiki/Alto)
- [スチュアート・ブランド](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%81%E3%83%A5%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89)
- [Chorded keyboard](https://en.wikipedia.org/wiki/Chorded_keyboard)
- [Xerox Star](https://ja.wikipedia.org/wiki/Xerox_Star)
- [Charles Irby](https://en.wikipedia.org/wiki/Charles_Irby)
- [Bob Sproull](https://en.wikipedia.org/wiki/Bob_Sproull)
- [Bill Paxton (computer scientist)](https://en.wikipedia.org/wiki/Bill_Paxton_(computer_scientist))
- [Daniel Borel](https://en.wikipedia.org/wiki/Daniel_Borel)
- [ダイナブック](https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%83%8A%E3%83%96%E3%83%83%E3%82%AF)
- [Smalltalk](https://ja.wikipedia.org/wiki/Smalltalk)
- [ENQUIRE](https://ja.wikipedia.org/wiki/ENQUIRE)
- [アラン・ケイ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B1%E3%82%A4)
- [人類の進化を加速させた「手で触る情報操作」 子どもの創造的学習意欲を刺激するパソコンは、ここから始まった](https://wisdom.nec.com/ja/innovation/2019062401/index.html)
- [デイビッド・J・ファーバー](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A4%E3%83%93%E3%83%83%E3%83%89%E3%83%BBJ%E3%83%BB%E3%83%95%E3%82%A1%E3%83%BC%E3%83%90%E3%83%BC)
- [Bruce Horn](https://en.wikipedia.org/wiki/Bruce_Horn)
- [Douglas Rushkoff](https://en.wikipedia.org/wiki/Douglas_Rushkoff)
- [The Future of Text](https://thefutureoftext.org/)
