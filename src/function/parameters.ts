// �I�v�V�����p�����[�^�[�����֐� ?:�I�v�V���i��
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('parameter sample1:����', username)
    return true
  } else {
    console.log('parameter sample2:���s')
    return false
  }
}

// �f�t�H���g�p�����[�^�[�����֐�
export const isUserSignedIn2 = (userId: string, username: string = 'NO_NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('parameter sample1:����', username)
    return true
  } else {
    console.log('parameter sample2:���s')
    return false
  }
}

// ���X�g�p�����[�^�[�����֐�
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}
