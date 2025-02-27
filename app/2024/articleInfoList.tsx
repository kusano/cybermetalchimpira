import {Daichiro} from '@/app/2024/articles/Daichiro'
import {Sashimi} from '@/app/2024/articles/Sashimi'
import {Nanocloudx} from '@/app/2024/articles/Nanocloudx'
import {Fuyutsubaki} from '@/app/2024/articles/Fuyutsubaki'
import {Arushiro} from '@/app/2024/articles/Arushiro'
import {Kinoppyd} from '@/app/2024/articles/Kinoppyd'
import {Kusano} from '@/app/2024/articles/Kusano'
import {Pokeba} from '@/app/2024/articles/Pokeba'
import {Quisty} from '@/app/2024/articles/Quisty'
import {ShiratamaIori} from '@/app/2024/articles/ShiratamaIori'
import {ShodaiSato} from '@/app/2024/articles/ShodaiSato'
import {Dera} from '@/app/2024/articles/Dera'
import {Nag4} from '@/app/2024/articles/Nag4'
import {Nagaimichiko} from '@/app/2024/articles/Nagaimichiko'
import {Mokuji} from '@/app/2024/articles/Mokuji'
import {Prologue} from '@/app/2024/articles/Prologue'
import {Atogaki} from '@/app/2024/articles/Atogaki'
import {Omake} from '@/app/2024/articles/Omake'
import {Okuduke} from '@/app/2024/articles/Okuduke'
import {ArticleInfo} from '@/app/lib'

export const articleInfoList: ArticleInfo[] = [
  {
    id: 'mokuji',
    component: <Mokuji/>,
    totalPage: 1,
    title: '目次',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'prologue',
    component: <Prologue/>,
    totalPage: 2,
    title: 'プロローグ',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'sashimi',
    component: <Sashimi/>,
    totalPage: 5,
    title: '盆踊れ',
    description: '盆踊りにハマった。',
    atogaki: '魔法つかいプリキュア！！～MIRAI DAYS～（2025年1月放送）を見てください',
    authorName: 'sashimi',
    authorImage: '/2024/authors/sashimi.png',
  },
  {
    id: 'shodaiSato',
    component: <ShodaiSato/>,
    totalPage: 4,
    title: '愛と金',
    description: 'あるいは信頼と信用',
    atogaki: '愛情込めて作りました',
    authorName: 'めたもん',
    authorImage: '/2024/authors/shodaisato.png',
  },
  {
    id: 'kusano',
    component: <Kusano/>,
    totalPage: 3,
    title: '視覚暗号',
    description: 'サイバー空間で使われているものとはちょっと違った面白い暗号の紹介',
    atogaki: '難しい暗号も面白いですよ',
    authorName: 'kusano_k',
    authorImage: '/2024/authors/kusano.png',
    authorLinkX: 'kusano_k',
  },
  {
    id: 'arushiro',
    component: <Arushiro/>,
    totalPage: 9,
    title: '達成感中毒患者と難しいゲーム達',
    description: '壺おじなどの登山ゲーやその他難しいゲームについて',
    atogaki: '皆さんも達成感に酔いしれましょう',
    authorName: 'あるしろ',
    authorImage: '/2024/authors/arushiro.png',
  },
  {
    id: 'quisty',
    component: <Quisty/>,
    totalPage: 5,
    title: '異変を見つけたら、すぐに引き返すこと。',
    description: '転職面接などで体験した事から働くという事を考える何か',
    atogaki: '転職活動の出口って本当にどこですか？',
    authorName: 'きすちぃ',
    authorImage: '/2024/authors/quisty.png',
    authorLinkX: 'Quisty',
    authorLinkWeb: 'lit.link/Quisty'
  },
  {
    id: 'pokeba',
    component: <Pokeba/>,
    totalPage: 5,
    title: 'リファレンスチェックに想いを馳せる',
    description: '推薦者視点での備忘録',
    atogaki: 'はたらきたくない！！！',
    authorName: '狂戦士P',
    authorImage: '/2024/authors/pokeba.png',
  },
  {
    id: 'shiratamaIori',
    component: <ShiratamaIori/>,
    totalPage: 2,
    title: 'メイド喫茶店員がガールズバーに転生してみた',
    description: 'これが本当の異世界転生',
    atogaki: '初めて文章を書きました…！来年はどうやってオタクを釣ろうかな~♪',
    authorName: '白玉いおり',
    authorImage: '/2024/authors/shiratamaIori.jpg',
    authorLinkX: 'iori_nnnn',
  },
  {
    id: 'dera',
    component: <Dera/>,
    totalPage: 10,
    title: 'メンズコーチチンピラDの弱男育成記録',
    description: '世の弱男どもを一端の男にするありがてぇ話をしてやるよ',
    atogaki: 'おい石破、俺を少子化担当大臣に任命しろ',
    authorName: 'チンピラD',
    authorImage: '/2024/authors/dera.png',
  },
  {
    id: 'kinoppyd',
    component: <Kinoppyd/>,
    totalPage: 6,
    title: 'ワインの味とは何なのか',
    description: 'ワインの香りを嗅いで銘柄当てるとかあれフィクションだから',
    atogaki: '酒なんて美味しけりゃなんでもいい',
    authorName: 'kinoppyd',
    authorImage: '/2024/authors/kinoppyd.jpeg',
  },
  {
    id: 'nanocloudx',
    component: <Nanocloudx/>,
    totalPage: 7,
    title: 'ドバイで石油王になろう',
    description: '5000兆円欲しいのでUAEに行ってきたわよ！',
    atogaki: '石油王になれなかったので大人しく帰国しました',
    authorName: 'なのくろ',
    authorImage: '/2024/authors/nanocloudx.jpg',
    authorLinkX: 'nanocloudx',
    authorLinkWeb: 'wwww.dev',
  },
  {
    id: 'fuyutsubaki',
    component: <Fuyutsubaki/>,
    totalPage: 4,
    title: 'JEFF MILLSになりたい。909を操りたい。1週間で',
    description: 'TR-909(クローン)で遊ぶぞ！！！',
    atogaki: 'Exhibitionist2 は amazon で3,548円(24/11/29現在)',
    authorName: '冬椿',
    authorImage: '/2024/authors/fuyutsubaki.png',
  },
  {
    id: 'nagaimichiko',
    component: <Nagaimichiko/>,
    totalPage: 2,
    title: '662日目のラブレター',
    description: '君に伝えておきたいことがあるんだ',
    atogaki: '我が子は最近パパをママと呼び、ママをパパと呼びます',
    authorName: 'ながいたん',
    authorImage: '/2024/authors/nagaimichiko.jpeg',
  },
  {
    id: 'nag4',
    component: <Nag4/>,
    totalPage: 5,
    title: '死ぬ日を自分で決める「自寿死」という考え',
    description: '寿命を自分で決めれば、人生の質を上げられるという話',
    atogaki: '天寿を全うするな！',
    authorName: 'nag4',
    authorImage: '/2024/authors/nag4.png',
  },
  {
    id: 'daichiro',
    component: <Daichiro/>,
    totalPage: 4,
    title: '未定',
    description: '未定',
    atogaki: '未定',
    authorName: 'だいちろ',
    authorImage: '/2024/authors/daichiro.png',
  },
  {
    id: 'omake',
    component: <Omake/>,
    totalPage: 3,
    title: 'おまけ',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'atogaki',
    component: <Atogaki/>,
    totalPage: 2,
    title: 'あとがき',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'okuduke',
    component: <Okuduke/>,
    totalPage: 1,
    title: '奥付',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
]
