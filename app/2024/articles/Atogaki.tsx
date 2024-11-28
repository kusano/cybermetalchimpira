import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {AtogakiLayout} from '@/components/AtogakiLayout'

export function Atogaki() {
  const info = getArticleInfo('atogaki', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>編集後記</h2>
        <p>
          <b>ノンジャンル総合誌「サイバーメタルチンピラ」</b>お読み頂きありがとうございます！<br/>
          サイバーメタルチンピラは毎年冬コミで年１回発刊している合同誌です。今年起きた出来事や新たな趣味を、それぞれの執筆者が自由に発信できる場として刊行しています。
        </p>
        <p>
          本サークルは３年目を迎え、今年は総勢１４名が集まる立派な合同誌となりました。嬉しい限りです。執筆者の皆様ならびに読者の皆様に多大なる感謝を申し上げます。<br/>
          当初は雑学や趣味を寄せ集めた同人誌になることを想定していましたが、今年も執筆者たちの「人生が垣間見える」なかなか熱い一冊に仕上がったのではないかと思います。
        </p>
        <p>
          情報発信できる場は多くありますが、自分の好きなことを自由に発信するというのは案外難しいものです。
          例えば「SNSで発信すると叩かれるかもしれない」「実社会では立場があって発信しづらい」「個人的な出来事なので発信する機会がなかった」などなど。<br/>
          「失恋」「愚痴」「人生観」のような、拡散したい訳ではないが誰かに聞いてほしいと思っている感情だったり、記録として本に残しておきたい感情などもあるでしょう。
        </p>
        <p>
          本サークルは法律や公序良俗に反しない限り、執筆者の自由な発信を尊重しております。<br/>
          普段は善良な執筆者たちが、内に秘めたチンピラ感情を年末に爆発させ、また来年も善良な日々を過ごせるように。そんな場として次回の冬コミでも発刊できればと思います。
        </p>
        <br/>
        <br/>
        <p>
          ・・・と、つい真面目な文章になってしまったので、雑なことも書いてみよう。
        </p>
        <p>
          <b>最近、車を買ったんですよ(突然の自慢)。</b><br/>
          あのイーロンマスクで有名な Tesla 社の Model 3 ってやつ。<br/>
          他のチンピラ共も車買ってて超羨ましかったわけ。私も欲しくなっちゃったよね。
        </p>
        <p>
          テスラは電気自動車なんだけど、車というか走るゲーミングPCなんですよね。<br/>
          運転席の画面で Steam が動くので本当にいろんなゲームで遊べる。車のハンドル使ってレーシングゲームが遊べる。まじで意味わからんｗｗｗ<br/>
          謎機能とか隠しコマンドも多くて、例えばドアをロックしたときの音を自分の好きな音に書き換えられるので、マクドナルドでポテトが揚がる音とか、Windowsのシャットダウン音とかに上書きできちゃう。ドア閉めるたびに流れるのがくだらなすぎて面白い。
        </p>
        <p>
          謎機能もありつつ、AI制御の自動運転は大変優秀なので、未来の車だなぁと感心する今日このごろ。AIといえば今年の<b>サイバーメタルチンピラガール</b>(表紙絵)もAIに描いてもらいました。昨年同様ながら絵のクオリティに驚き。しゅごいいいい。
        </p>
        <p>
          2025年は大阪万博の年ですね。ミャクミャク様に会いに行こう。<br/>
          また来年もサイバーメタルチンピラをよろしくお願いします！！！
        </p>
        <p style={{textAlign: 'right'}}>編集担当 なのくろ</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <AtogakiLayout articleInfoList={articleInfoList}/>
      </Page>
    </div>
  )
}
