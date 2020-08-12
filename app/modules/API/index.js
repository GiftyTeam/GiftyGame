const DOMAIN = "https://gifty-data.firebaseio.com/";
function fetchAPI(endpoint,method){
    const options={
        method,
        headers:{
            'Content-Type':'application/json'
        }
    }
    return async (args)=>{
        let GETARGS = '';
        if(method==='GET'){
            for(let key in args){
                GETARGS+=`${key}=${args[key]}&`
            }
        }
        else{
            options.body = JSON.stringify(args);
        }
        const RESPONSE = await fetch(`${DOMAIN}${endpoint}${GETARGS}`,options);
        return RESPONSE.json();
    }
}

export const getUserExtraDataFetch=fetchAPI("userExtraData.json","GET");
export const createUserExtraDataFetch=fetchAPI("userExtraData.json","POST");