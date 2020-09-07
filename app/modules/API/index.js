
const URL = "https://gamegifty.herokuapp.com/addNewUser";

export default function fetchAPI(userData){
    console.log('userData',userData);
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).catch(err => console.error('ERROR', err));
}

