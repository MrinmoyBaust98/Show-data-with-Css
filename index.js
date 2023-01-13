 function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=>displayPost(data) )

}

function displayPost(posts){

    const postField=document.getElementById("post-container");
    for(const post of posts){

        const div=document.createElement('div');
        div.innerHTML=`

        <h3> Title: ${post.title}</h3>
        <p> ${post.body}</p>
        
        `
        postField.appendChild(div);
        div.classList.add('body-style');
    }
    
}