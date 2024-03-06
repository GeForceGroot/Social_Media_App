
$(() => {
    $("#navbar").load('/components/navbar.html')
    $("#content").load('/components/all-artical.html', fetchAllPosts);
    $("#footer").load('/components/footer.html')

})


function loggedInUser() {
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if (!currentUser) {
        $.post('/api/user', (user) => {
            if (user) {
                console.log(`resgisted current user as ${user.username}`)
                window.localStorage.user = user;
                currentUser = user.username;
                $('#nav-name').text(currentUser.username);
            } else {
                console.log('hello')
            }
        });
    } else {
        $('#nav-name').text(currentUser.username);
        console.log(`resuming season  as ${currentUser.username}`)
    }

}


function fetchAllPosts() {
        let user = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
        if (!user) {
            loggedInUser();
        }
        $.get('/api/post', (posts) => {
            for (p of posts) {
                $('#all-post').append(
                    $(`
                        <div class="card col-4 m-2" style="width: 18rem; background-color: lightblue;">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${p.user.username}</h6>
                        <p class="card-text">${p.body.substring(0, 200)}
                        <a href="#">...Read more</a>
                        </p>
                        <span class="card-link">comment</span>
                        <span class="card-link">Like</span>
                    </div>
                </div>
                        `)
                )
            }
        })
}


function createNewPost() {
    let userID = JSON.parse(window.localStorage.user).id;
    let userName = JSON.parse(window.localStorage.user).username;
    let postBody = {
        id: userID,
        title: $('#post-title').val(),
        body: $('#post-body').val()
    }

    $.post(`/api/post`, postBody, (post) => {
        fetchAllPosts();
        console.log(`post created`)
    });

}






