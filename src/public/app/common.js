// const { Json } = require("sequelize/types/lib/utils")

$(()=>{
    $('#navbar').load("components/navbar.html",loginIfneeded)
    $('#footer').load('components/footer.html')
    $('#content').load('components/all-articles.html')
    loadPosts()
    
})

function loginIfneeded(){
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        $.post('/api/users',{},(user)=>{
            if(user){
                console.log("logged in as ",user.username)
                window.localStorage.user = JSON.stringify(user)
                console.log("#nav-username")
                $('#nav-username').text(user.username)
            }
        })
    }else{
        console.log('resuming session as ',currentUser.username)
        console.log($("#nav-username"))
        $('#nav-username').text(currentUser.username)
    }

    $("")

}

function loadPosts(){
    $.get('/api/posts',(posts)=>{
        for(let p of posts){
            $('#posts-container').append(
                $(
                `<div class="card col-4 p-2 m-2 al" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body.substr(0,200)}<a href='#'> ...read more</p>
                  <a href="#" class="card-link">Comment</a>
                  <a href="#" class="card-link">Like</a>
                </div>
              </div>`)
            )
        }
    })

    
}