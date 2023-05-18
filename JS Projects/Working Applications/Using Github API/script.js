
const APIURL = 'https://api.github.com/users/';

getUSer('d3h1')

async function getUSer(username) {
    try {
        const { data } = await axios(APIURL + username)
        console.log(data)
    } 
    catch(err) {
        console.log(err)
    }
}

