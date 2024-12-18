// TODO: Create an interface for the Candidate objects returned by the API

interface Candidate {
    img : string;
    login: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    accepted?: boolean;
    avatar_url?: string;
}

interface SavedCandidatesProps {
    candidates: Candidate[]
}

export type { Candidate, SavedCandidatesProps }