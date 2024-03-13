export default function promissSample() {
    const url = "https://api.github.com/users/techyama";

    type Profile = {
        login: string;
        id: number;
    }

    // 引数無しの関数でProfile型かnullを返す
    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () =>  {
        // Promissクラスでresolveとrejectメソッドを利用可能にする
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res) => {
               // レスポンスのBodyをJSONで読み取った結果を返す
               res.json()
               .then((json: Profile) => {
                   console.log('非同期処理プロミスsample1:', json);
                   // 実行成功の場合にjsonを返す
                   resolve(json);
               })
               .catch((error) => {
                   console.error(error);
                   // エラーの場合にnullを返す
                   reject(null);
               })
            })
            .catch((error) => {
               console.error(error);
                // エラーの場合にnullを返す
               reject(null);
            })
        })
    }

    fetchProfile()
    // promiss型を返す場合はthenやcatchメソッドを使う
        .then((profile: Profile | null) => {
            // profileが存在すれば出力
            if (profile) {
                console.log('非同期処理プロミスsample2:', profile);
            }
        })
        .catch(() => {

        })
}