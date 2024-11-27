import {Nanocloudx} from '@/app/2024/articles/Nanocloudx'
import {Navigation} from '@/components/Navigation'
import {Arushiro} from '@/app/2024/articles/Arushiro'
import {Dera} from '@/app/2024/articles/Dera'
import {Daichiro} from '@/app/2024/articles/Daichiro'
import {Fuyutsubaki} from '@/app/2024/articles/Fuyutsubaki'
import {Kinoppyd} from '@/app/2024/articles/Kinoppyd'
import {Kusano} from '@/app/2024/articles/Kusano'
import {Nag4} from '@/app/2024/articles/Nag4'
import {Nagaimichiko} from '@/app/2024/articles/Nagaimichiko'
import {Pokeba} from '@/app/2024/articles/Pokeba'
import {Quisty} from '@/app/2024/articles/Quisty'
import {ShiratamaIori} from '@/app/2024/articles/ShiratamaIori'
import {ShodaiSato} from '@/app/2024/articles/ShodaiSato'
import {Atogaki} from '@/app/2024/Atogaki'
import {Omake} from '@/app/2024/Omake'
import {Okuduke} from '@/app/2024/Okuduke'
import {Prologue} from '@/app/2024/Prologue'
import {Mokuji} from '@/app/2024/Mokuji'
import {Sashimi} from '@/app/2024/articles/Sashimi'

// ページ数管理
const pageCount = {
  mokuji: 1,
  prologue: 2,
  daichiro: 4,
  sashimi: 1,
  nanocloudx: 7,
  fuyutsubaki: 1,
  arushiro: 9,
  kinoppyd: 6,
  kusano: 3,
  pokeba: 5,
  quisty: 5,
  shiratamaIori: 2,
  shodaiSato: 3,
  dera: 1,
  nag4: 5,
  nagaimichiko: 2,
  atogaki: 1,
  omake: 1,
  okuduke: 1,
}

function getPageNumber(section: keyof typeof pageCount) {
  let pageNumber = 0
  for (const key in pageCount) {
    if (key === section) break
    pageNumber += pageCount[key as keyof typeof pageCount]
  }
  return pageNumber + 1
}

export default function Page() {
  return (
    <div>
      <Navigation year={'2024'}>
        <li><a href={'#mokuji'}>目次</a></li>
        <li><a href={'#prologue'}>プロローグ</a></li>
        <li><a href={'#daichiro'}>だいちろ</a></li>
        <li><a href={'#sashimi'}>さしみ</a></li>
        <li><a href={'#nanocloudx'}>なのくろ</a></li>
        <li><a href={'#fuyutsubaki'}>冬椿</a></li>
        <li><a href={'#arushiro'}>あるしろ</a></li>
        <li><a href={'#kinoppyd'}>kinoppyd</a></li>
        <li><a href={'#kusano'}>kusano_k</a></li>
        <li><a href={'#pokeba'}>狂戦士P</a></li>
        <li><a href={'#quisty'}>きすちぃ</a></li>
        <li><a href={'#shiratamaIori'}>白玉いおり</a></li>
        <li><a href={'#shodaiSato'}>めたもん</a></li>
        <li><a href={'#dera'}>チンピラD</a></li>
        <li><a href={'#nag4'}>nag4</a></li>
        <li><a href={'#nagaimichiko'}>ながいたん</a></li>
        <li><a href={'#atogaki'}>あとがき</a></li>
        <li><a href={'#omake'}>おまけ</a></li>
        <li><a href={'#okuduke'}>奥付</a></li>
      </Navigation>
      <Mokuji pageNumber={getPageNumber('mokuji')}/>
      <Prologue pageNumber={getPageNumber('prologue')}/>
      <Daichiro pageNumber={getPageNumber('daichiro')}/>
      <Sashimi pageNumber={getPageNumber('sashimi')}/>
      <Nanocloudx pageNumber={getPageNumber('nanocloudx')}/>
      <Fuyutsubaki pageNumber={getPageNumber('fuyutsubaki')}/>
      <Arushiro pageNumber={getPageNumber('arushiro')}/>
      <Kinoppyd pageNumber={getPageNumber('kinoppyd')}/>
      <Kusano pageNumber={getPageNumber('kusano')}/>
      <Pokeba pageNumber={getPageNumber('pokeba')}/>
      <Quisty pageNumber={getPageNumber('quisty')}/>
      <ShiratamaIori pageNumber={getPageNumber('shiratamaIori')}/>
      <ShodaiSato pageNumber={getPageNumber('shodaiSato')}/>
      <Dera pageNumber={getPageNumber('dera')}/>
      <Nag4 pageNumber={getPageNumber('nag4')}/>
      <Nagaimichiko pageNumber={getPageNumber('nagaimichiko')}/>
      <Atogaki pageNumber={getPageNumber('atogaki')}/>
      <Omake pageNumber={getPageNumber('omake')}/>
      <Okuduke/>
    </div>
  )
}
