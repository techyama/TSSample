// オプションパラメーターを持つ関数 ?:オプショナル
export const isUserSignedIn = (userId: string, username?: string): boolean => {
    if (userId === 'ABC') {
        console.log("parameter sample1:成功", username);
        return true;
    } else {
        console.log("parameter sample2:失敗");
        return false;
    }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = "NO_NAME"): boolean => {
    if (userId === 'ABC') {
        console.log("parameter sample1:成功", username);
        return true;
    } else {
        console.log("parameter sample2:失敗");
        return false;
    }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((prevTotal, productPrice) => {
        return prevTotal + productPrice;
    }, 0)
}
