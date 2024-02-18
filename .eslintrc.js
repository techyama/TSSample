module.exports = {
    env: {
        browser: true,
        es6: true
    },
    //pretterの設定は最後に
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint"],
    //TypeScriptを解析するparserを指定
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        //tsconfig.jsonのパスを指定
        "project": "./tsconfig.json"
    },
    //カレントディレクトリをルートディレクトリとする
    //falseだと親ファイルにeslintの設定ファイルがある場合に参照を上書きされてしまう
    root: true,
    rules: {}
}