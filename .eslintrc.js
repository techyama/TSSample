module.exports = {
    env: {
        browser: true,
        es6: true
    },
    //pretter�̐ݒ�͍Ō��
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint"],
    //TypeScript����͂���parser���w��
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        //tsconfig.json�̃p�X���w��
        "project": "./tsconfig.json"
    },
    //�J�����g�f�B���N�g�������[�g�f�B���N�g���Ƃ���
    //false���Ɛe�t�@�C����eslint�̐ݒ�t�@�C��������ꍇ�ɎQ�Ƃ��㏑������Ă��܂�
    root: true,
    rules: {}
}