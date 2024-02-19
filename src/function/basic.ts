// �A���[�֐���`
export const logMessage = (message: string): void => {
    console.log(message);
}
// �A���[�֐��̏ȗ���
export const logMessage2 = (message: string): void => console.log(message);

// ���O�t���֐�
export function logMessage3(message: string): void {
    console.log(message);
}

// �֐���
export const logMessage4 = function (message: string): void {
    console.log(message);
}

// ��ɗ�O�𔭐�����̂Ŗ߂�l��never
export const alwatsThrowError = (message: string): never => {
    throw new Error(message);
}

// �Ăяo���V�O�l�`��(�ȗ��L�@)React��props��n���Ƃ��ɂ悭�g����
type Logmessage = (message: string) => void
export const logMessage5: Logmessage = (message) => {
    console.log(message);
}

// ���S�ȌĂяo���V�O�l�`��
type FullLogMessage = {
    (message: string): void
}
export const logmessage6: FullLogMessage = (message: string) => {
    console.log(message);
}