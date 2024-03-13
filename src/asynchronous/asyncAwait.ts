export default async function asyncAwaitSample() {
    const url = "https://api.github.com/users/techyama";

    type Profile = {
        login: string;
        id: number;
    }

    type FetchProfile = () => Promise<Profile | null>
    
    // asyncを宣言するとawaikを使えるようになる
    // await(Promissの結果が返されるまで待機する)
    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((res) => res)
            .catch((error) => {
                console.log(error);
                return null;
            })

        if (!response) {
            return null
        }

        const json = await response.json()
            .then((json: Profile) => {
                console.log('非同期処理async/awaitsample1:', json);
                return json;
            })
            .catch((error) => {
                console.log(error);
                return null;
            })

        if (!response) {
            return null;
        }

        return json;
    }

    const profile = await fetchProfile()
    if (profile) {
        console.log('非同期処理async/awaitsample2:', profile);
    }
}