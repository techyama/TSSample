export default function tupleSample() {
    // 一般的なタプルの型定義
    let response: [number, string] = [200, 'ok'];
    // response = [400, 'Bad Request', 'Email parameter is missing']; // 要素数不一致
    // response = ['400', 'Bad Request']; // 型不一致
    console.log('tuple sample 1:', response);

    // 可変長変数を使ったタプル
    const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
    girlFriends.push('Misa');
    console.log('tuple sample 2:', girlFriends);
}