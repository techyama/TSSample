// コールバック地獄の体験
export default function callBackSample() {
    const url = "https://api.github.com/users/techyama";

    // コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        fetch(url)
         .then((res) => {
            // レスポンスのBodyをJSONで読み取った結果を返す
            res.json()
            .then((json) => {
                console.log('非同期処理コールバックsample1:', json);
                return json;
            })
            .catch((error) => {
                console.error(error);
            })
         })
         .catch((error) => {
            console.error(error);
         })
    }

    const profile = fetchProfile();
    console.log('非同期処理コールバックsample2:', profile);
}