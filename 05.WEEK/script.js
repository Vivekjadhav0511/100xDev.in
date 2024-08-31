let res = document.getElementById('res')

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json()
    console.log(data);
    // res.innerHTML = data.body
}
getData()


async function fetchPosts() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    document.getElementById("res").innerHTML = res.data.body;
}
fetchPosts();