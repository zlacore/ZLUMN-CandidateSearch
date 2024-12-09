import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  // Write code to:
  // - Search for candidate

  const [username, searchUsername] = useState('')

  function searchBar () {
    return (
      <>
      <input
      value={username}
      onChange={(e) => searchUsername(e.target.value)}>
      </input>
      <button type='submit'>Search</button>
      </>
    )
  }
const userSearch = async () => {
  const userData = await searchGithubUser(username)
    const candidate: Candidate = {
      img: userData.avatar_url,
      login: userData.login,
      location: userData.location,
      email: userData.email,
      company: userData.company,
      bio: userData.bio
  }
  console.log(candidate);
  return candidate
}

// const getRandomUsers = async () => {
//   const randomUserData = await searchGithub()
//   const candidate: Candidate = {
//     img: randomUserData.avatar_url,
//     login: randomUserData.login,
//     location: randomUserData.location,
//     email: randomUserData.email,
//     company: randomUserData.company,
//     bio: randomUserData.bio
//   }
//   return candidate
// }

///// Code assisted by Xpert Learning Assistant ///////////////
const [candidate, setCandidate] = useState<Candidate | null>(null);

useEffect(() => {
  if (username) {
    userSearch().then((data) => {
      setCandidate(data); // Update state with the candidate data
    });
  }
}, [username]);

return (
  <>
    <h1>Candidate Search</h1>
    {searchBar()}
    {candidate && (
      <div>
        <img src={candidate.img} alt={candidate.login} />
        <p>{candidate.login}</p>
        <p>{candidate.email}</p>
        <p>{candidate.location}</p>
        <p>{candidate.company}</p>
        <p>{candidate.bio}</p>
      </div>
    )}
  </>
);
;
};

export default CandidateSearch;




{/* <h1>Candidate Search</h1>
{searchBar()}

{useEffect(() => {
  userSearch().then((candidate) => {
    <>
    <div>
    <img src={candidate.img}></img>
    <p>{candidate.login}</p>
    <p>{candidate.email}</p>
    <p>{candidate.location}</p>
    <p>{candidate.company}</p>
    <p>{candidate.bio}</p>
    </div>
    </>
  })
}, [username])} */}