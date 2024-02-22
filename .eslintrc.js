module.exports = {
    env: {
        browser: true,
        es6: true
    },
    //pretterは一番最後に記述
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    plugins: ["@typescript-eslint"],
    //TypeScriptを解析するparserを指定
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        //tsconfig.jsonのパスを指定
        "project": "./tsconfig.json"
    },
    //rootプロパティをtrueにした方がよい
    //falseだと親ファイルにeslintrcがあると参照を取られてしまう
    root: true,
    rules: {}
}