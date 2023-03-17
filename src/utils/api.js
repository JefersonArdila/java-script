
const fetchApi = async (url) => {
    try{
        
        const res = await fetch(url);
        const data = await res.json()
        .then(data => {
            
            // Recorra cada objeto de carácter y extraiga el id, el nombre y el genero
            data.results.forEach(character => { 
            console.log(`ID: ${character.id}, Name: ${character.name}, Gender: ${character.gender}`);
            })
            
        })
        
        
        
        
        
        
    }catch(error){
console.log(error);

    }
}

const gretings = () => {
    console.log('hello there')
    
}


module.exports = {
    fetchApi,
    gretings
};