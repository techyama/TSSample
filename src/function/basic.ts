// アロー関数
export const logMessage = (message: string): void => {
    console.log(message)
}
// アロー関数(省略記法)
export const logMessage2 = (message: string): void => console.log(message)

// 名前付き関数
export function logMessage3(message: string): void {
    console.log(message)
}

export const logMessage4 = function (message: string): void {
    console.log(message)
}

export const alwatsThrowError = (message: string): never => {
    throw new Error(message)
}

type Logmessage = (message: string) => void
export const logMessage5: Logmessage = (message) => {
    console.log(message)
}

type FullLogMessage = {
    (message: string): void
}
export const logmessage6: FullLogMessage = (message: string) => {
    console.log(message)
}
