import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");
 axios.get( `https://api.github.com/users/Noel-96`)
  .then(result => {
   const card =  createCard(result.data)
   cards.appendChild(card)
  })
  .catch(err => console.log(err))



// followersArray.forEach((elem) =>{
//   return axios.get(`https://api.github.com/users/${elem}`)
//   .then(res => {
//     const card =  createCard(result.data)
//     cards.appendChild(card)
//   })
//   .catch(err => console.log(err))
// })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray =  [ "Noel-96" ,
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

  // const followersArray = ["https://api.github.com/users/bigknell","https://api.github.com/users/luishrd","https://api.github.com/users/justsml","https://api.github.com/users/dustinmyers","https://api.github.com/users/tetondan"]



/*

  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(gitHubData){

  const divCard = document.createElement('div')
  const cardImg = document.createElement('img')
  const divCardInfo = document.createElement('div')
  const header3 = document.createElement('h3')
  const usernameParagraph = document.createElement('p')
  const locationParagraph = document.createElement('p')
  const profilePlaceholderParagraph = document.createElement('p')
  const githubPageAddress = document.createElement('a')
  const FollowersParagraph = document.createElement('p')
  const FollowingParagraph = document.createElement('p')
  const BioParagraph = document.createElement('p')

  divCard.classList.add('card')
  divCardInfo.classList.add('card-info')
  header3.classList.add('name')
  usernameParagraph.classList.add('username')

  cardImg.src = gitHubData.avatar_url
  header3.textContent = gitHubData.login
  usernameParagraph.textContent = gitHubData.name
  locationParagraph.textContent = `Location: ${gitHubData.location} `
  profilePlaceholderParagraph.textContent = "Profile"
  githubPageAddress.setAttribute('href', gitHubData.html_url)
  githubPageAddress.textContent = gitHubData.html_url
  FollowersParagraph.textContent = `Followers: ${gitHubData.followers} `
  FollowingParagraph.textContent = `Following: ${gitHubData.following} `
  BioParagraph.textContent = `Bio: ${gitHubData.bio} `


  divCard.appendChild(cardImg)
  divCard.appendChild(divCardInfo)
  divCardInfo.appendChild(header3)
  divCardInfo.appendChild(usernameParagraph)
  divCardInfo.appendChild(locationParagraph)
  divCardInfo.appendChild(profilePlaceholderParagraph)
  profilePlaceholderParagraph.appendChild(githubPageAddress)
  divCardInfo.appendChild(FollowersParagraph)
  divCardInfo.appendChild(FollowingParagraph)
  divCardInfo.appendChild(BioParagraph)


  return divCard

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
