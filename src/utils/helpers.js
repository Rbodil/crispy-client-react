export async function buildURL(params){
    const response = await fetch(params, {
        method: 'GET',
        mode:'cors',
        cache:'no-cache'
    })
    
    console.log(response);
    
}

