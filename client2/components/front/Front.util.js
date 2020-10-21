
export const FrontFetch = (url, options) => {

    // const res = await fetch(url, options);

    // if (res.ok) {
    //     console.log('user created/logged in');
    // }
    // else {
    //     console.log('error creating/logging in user');
    //     let data = await res.json();
    //     console.log(data);
    //     return null;
    // }

    // let data = await res.json();
    // console.log(data);
    // return data;
    fetch(url, options)
    .then((res) => {
        if(res.ok) {
            console.log('user created/logged in');
        }
        else {
            console.log('dumb');
            return res.json();
        }
    })
    .then((data) => {
        console.log('showing data');
        if (data) console.log(data);
        return true;
        
    })
    .catch((err) => {
        console.log('error :'+err);
        console.log('huh');
        return null;
    });
}