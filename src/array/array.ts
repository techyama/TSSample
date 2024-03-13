export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(1);
  console.log('array sample 1:', colors)

  // パターン2
  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('10');
  console.log('array sample 2:', even)

  // 合併型
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  console.log('array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  someArray.push('DEF')
  // someArray.push(true);
  console.log('array sample 4:', someArray)
}
