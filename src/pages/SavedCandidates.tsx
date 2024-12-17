import type { Candidate } from "../interfaces/Candidate.interface";
import { useState, useEffect } from "react";
const SavedCandidates = () => {
  // Create function to:
  // Read candidates array from localstorage
  // Create html using react components for however many candidates there are
  let [listArray, updateList] = useState<Candidate[]>([])
  useEffect(() => {
    const candList: string | null = localStorage.getItem('candidates');
    if (candList !== null) {
      updateList(JSON.parse(candList))
    }
  }, [])
  const rejectCandidate = (id: string) => {
    // Check which candidate is being viewed (Match find index of candidate via login property)
    // Remove candidate object from array
    // Save candidate array back into local storage

    // Code assisted by Xpert Learning Assistant
    const index = listArray.findIndex(candidate => candidate.login === id);
    // Code assisted by the main man Charlie
    const spliceArray = listArray.filter(el => el.login != id);
    if (index !== -1) {
      updateList(spliceArray)
    }
    localStorage.setItem('candidates', JSON.stringify(spliceArray))
  }
  // const displayCandidates = (listArray: Candidate[]) => {
  //   // console.log(candList, 'this was in storage');
  // if (listArray.length > 0) {
  //   // Xpert Learning Assistant advised me to change my for loop to a map function in order to create the array of candidate objects /////
  //   return listArray.map((candidate, index) => (
  //     <div key={index}>
  //       <img src={candidate.img} alt={candidate.login} />
  //       <p>{candidate.login}</p>
  //       <p>{candidate.email}</p>
  //       <p>{candidate.location}</p>
  //       <p>{candidate.company}</p>
  //       <p>{candidate.bio}</p>
  //       <button id={candidate.login} onClick={() => rejectCandidate(candidate.login)}>
  //         Reject
  //       </button>
  //     </div>
  //   ));
  // } else {
  //   return (
  //     <div>
  //       <p>There are no selected potential candidates yet!</p>
  //     </div>
  //   )
  // }
  // }

  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {
          listArray && listArray.length > 0
            ? listArray.map((candidate, index) => (
              <div key={index}>
                <img src={candidate.avatar_url} alt={candidate.login} />
                <p>{candidate.login}</p>
                <p>{candidate.email}</p>
                <p>{candidate.location}</p>
                <p>{candidate.company}</p>
                <p>{candidate.bio}</p>
                <button id={candidate.login} onClick={() => rejectCandidate(candidate.login)}>
                  Reject
                </button>
              </div>
            ))
            : <div>
              <p>There are no selected potential candidates yet!</p>
            </div>
        }
      </div>
    </>
  );
};





export default SavedCandidates;
