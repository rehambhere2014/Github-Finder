//fetch data

class Github{
    constructor(){
        this.client_secret= 'bf5ebfdc4ee7d9fd18b0be4ef4c4319b3cf3181d';
        this.client_id= '08a12b8c24c6f5114e88'  ;  
        this.repos_count=5;   
        this.repos_sort='created: asc'

    }
    async  getUser(user){

        let res = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       let repo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let data = await res.json();
        let repoProfile= await repo.json();
        return{
            profile:data,
            repo:repoProfile
        }
    }


 
}