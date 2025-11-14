// Load posts list
async function loadPosts() {
    const postsContainer = document.getElementById("posts");
    if (!postsContainer) return;

    // List all your post filenames here:
    const postFiles = ["first_blog.json"];

    for (const file of postFiles) {
        const post = await fetch(`posts/${file}`).then(r => r.json());
        const id = file.replace(".json", "");

        postsContainer.innerHTML += `
            <div class="post-card">
                <h2><a href="post.html?id=${id}">${post.title}</a></h2>
                <small>${post.date}</small>
            </div>
        `;
    }
}

loadPosts();


// Load a single post
async function loadSinglePost() {
    const postContainer = document.getElementById("post");
    if (!postContainer) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const post = await fetch(`posts/${id}.json`).then(r => r.json());

    postContainer.innerHTML = `
        <h1>${post.title}</h1>
        <small>${post.date}</small>
        <article>${post.content}</article>
    `;
}

loadSinglePost();

