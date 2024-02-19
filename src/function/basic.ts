// アロー関数定義
export const logMessage = (message: string): void => {
    console.log(message);
}
// アロー関数の省略式
export const logMessage2 = (message: string): void => console.log(message);

// 名前付き関数
export function logMessage3(message: string): void {
    console.log(message);
}

// 関数式
export const logMessage4 = function (message: string): void {
    console.log(message);
}

// 常に例外を発生するので戻り値はnever
export const alwatsThrowError = (message: string): never => {
    throw new Error(message);
}

// 呼び出しシグネチャ(省略記法)Reactでpropsを渡すときによく使われる
type Logmessage = (message: string) => void
export const logMessage5: Logmessage = (message) => {
    console.log(message);
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
    (message: string): void
}
export const logmessage6: FullLogMessage = (message: string) => {
    console.log(message);
}