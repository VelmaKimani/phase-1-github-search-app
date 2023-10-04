//"https://api.github.com/users/{user}",
var form = document.getElementById('github-form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById('search').value
    
    let originalName =search.split(' ').join('') //join separate strings into one

    document.getElementById('user-list').innerHTML = ''
    //alert(originalName)
    
    fetch('https://api.github.com/users/'+originalName)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        document.getElementById('user-list').innerHTML = 
        `
        <li>
        <a href = ${data.repos_url} target '_blank'>${data.repos_url}</a>
        </li>
        <br></br>
        <li>
        <a target = '_blank' href='https://www.github.com/${originalName}'>https://www.github.com/${originalName}</a>
        </li>
        <br></br>
        <li>
        ${originalName}
        </li>
        <br></br>
        <li>
        <img src = '${data.avatar_url}'/>
        </li>
        `
        document.getElementById('repos-list').innerHTML = 
        `
        <li>
       
        </li>
        `
     } )
   // alert(search)
})