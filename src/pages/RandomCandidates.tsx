import type { Candidate } from "../interfaces/Candidate.interface"
import { searchGithub } from "../api/API";
import { useState, useEffect } from "react";


// Necessary steps for this component:
// 1: Get candidates array from github api
// 2: Display first candidate from array
// 3a: When accept button is clicked, add candidate to potentialcans array and increase userIndex by 1 to cycle through array
// 3b: When reject button is clicked, increase userIndex by 1
const RandomCandidates = () => {

  const [userIndex, setUserIndex] = useState<number>(-1);
  const [potentialCans, saveCans] = useState<(Candidate | null)[]>([]);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [userData, setUserData] = useState<Candidate[]>([]);

  const saveCandidate = () => {
    const newArr = [...potentialCans, candidate];

    saveCans(newArr);
    localStorage.setItem('candidates', JSON.stringify(newArr))
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
  //   setCandidate(candidate)
  //   return candidate
  // }

  const nextCandidate = () => {
    setUserIndex(userIndex + 1);
  }

  useEffect(() => {
    if (userIndex === -1) {
      searchGithub().then(data => {
        console.log("Hey! I'm alive!", data);
        setUserData(data);
        setUserIndex(0);
      });
    } else if (userIndex > -1 || userIndex < 29) {
      console.log('Updating the current candidate!');
      setCandidate(userData[userIndex]);
    } else if (userIndex > 29) {
      setUserIndex(-1)
    }
  }, [userIndex])

  return (
    <>
      {candidate 
        ? 
        <div>
          <img src={candidate.avatar_url} alt={candidate.login} />
          <p>{candidate.login}</p>
          <p>{candidate.email}</p>
          <p>{candidate.location}</p>
          <p>{candidate.company}</p>
          <p>{candidate.bio}</p>
          <span>
            <button onClick={() => { saveCandidate(); nextCandidate(); }}>
              Accept
            </button>
          </span>
          <span>
            <button onClick={() => { nextCandidate(); }}>
              Reject
            </button>
          </span>
        </div>
        : 
        <button onClick={() => { nextCandidate(); }}>
          Click here to find a new candidate!
        </button>
      }
    </>
  )

}


export default RandomCandidates