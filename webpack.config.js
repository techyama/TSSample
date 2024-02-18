const path = require("path");
module.exports = {
  // ���W���[���o���h�����s���N�_�ƂȂ�t�@�C���̎w��
  entry: {
    bundle: "./src/index.ts",
  },
  // ���W���[���o���h�����s�������ʂ��o�͂���ꏊ��t�@�C�����̎w��
  output: {
    path: path.join(__dirname, "dist"), // "__dirname"�̓t�@�C�������݂���f�B���N�g��
    filename: "[name].js", // [name]��entry�ŋL�q�������O�i���̐ݒ�Ȃ�bundle�j
  },
  // import���Ńt�@�C���g���q���������ɖ��O�������邽�߂̐ݒ�
  // ��...�uimport World from './world'�v�ƋL�q�����"world.ts"�Ƃ������O�̃t�@�C�������W���[���Ƃ��ĒT��
  resolve: {
    extensions: [".ts", ".js"], // React��.tsx��.jsx�̊g���q�����������ꍇ�͔z����ɒǉ�����
  },
  // �z�b�g�����[�h�L����
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }, // webpack-dev-server�̌��J�t�H���_
    open: true, // �T�[�o�[�N�����Ƀu���E�U���J��
  },
  // ���W���[���ɓK�p���郋�[���̐ݒ�i���[�_�[�̐ݒ���s�����������j
  module: {
    rules: [
      {
        // �g���q��.ts�̃t�@�C���ɑ΂���TypeScript�R���p�C����K�p����
        // React�ŗp����.tsx�̊g���q�ɂ��K�p����ꍇ�� test:/\.(ts|tsx)$/,
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
