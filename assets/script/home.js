





async function getUsers(endpoint){
  const URL = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/JSON; charset=UTF-8'
    },
    mode: 'cors'
  }
  try {
    const result = await fetch(endpoint,options);
    if (!result.ok){
      throw new Error(`${result.statusText} ${result.status}`)
    }
    const data = await result.json();
    console.log(data.results);

  }
  catch(error){
    console.log(error.message);
    
  }

} 
getUsers(URL);









