export default function aliasSample() {
  // 型エイリアス(型に名前を付けることができる)
  type Profile = {
    name: string
    age: number
    gender: string
  }
  const testUser: Profile = {
    name: 'Taro',
    age: 25,
    gender: 'female',
  }
  console.log('object alias sample 1:', testUser)

  // 合併型(union)と交差型(intersection)
  // 合併型 型Aと型Bどちらかの型を持つ
  // 交差型 型Aと型B両方の肩を持つ(共通する型ではない)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型...KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard

  // 交差型...KnightとWizardの両方の型を持つ
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '連続切り',
  }
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  }
  console.log('object alias sample 2:', adventurer1)
  console.log('object alias sample 3:', adventurer2)

  const paradin: Paladin = {
    hp: 100,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '大回転切り',
    magicSkill: 'ボルケーノ',
  }
  console.log('object alias sample 4:', paradin)
}
