const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const githubData = {
    "login": "SameerAli126",
    "id": 97823873,
    "node_id": "U_kgDOBdSsgQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/97823873?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SameerAli126",
    "html_url": "https://github.com/SameerAli126",
    "followers_url": "https://api.github.com/users/SameerAli126/followers",
    "following_url": "https://api.github.com/users/SameerAli126/following{/other_user}",
    "gists_url": "https://api.github.com/users/SameerAli126/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SameerAli126/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SameerAli126/subscriptions",
    "organizations_url": "https://api.github.com/users/SameerAli126/orgs",
    "repos_url": "https://api.github.com/users/SameerAli126/repos",
    "events_url": "https://api.github.com/users/SameerAli126/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SameerAli126/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sameer Khan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-01-16T07:18:42Z",
    "updated_at": "2025-03-31T14:43:29Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send(`
        <h1>Kindly login at 
            <a href="https://opti-trade-2-0-87y5efwoj-sameerali126s-projects.vercel.app/" 
               target="_blank" 
               style="color: blue; text-decoration: underline;">
                OptiTrade
            </a>
        </h1>
    `);
});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})