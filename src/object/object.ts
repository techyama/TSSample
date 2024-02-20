export default function objectSample() {
  // const a: object = {
  //     name: 'ikki',
  //     age: 22
  // }
  // a.name;

  // オブジェクトリテラル記法で定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('object sample 1:', country)

  country = {
    language: 'English',
    name: 'American',
  }
  console.log('object sample 2:', country)

  // オプショナルとreadonly
  const ikki: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 22,
    lastName: 'Yamamoto',
    firstName: 'Ikki',
  }
  ikki.gender = 'male'
  ikki.lastName = 'Tanaka'
  // ikki.firstName = 'Taro';
  console.log('object sample 3:', ikki)

  // インデックスシグネチャ
  //keyはstringかnumberのみ使用可能
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  console.log('object sample 4:', capitals)
}
