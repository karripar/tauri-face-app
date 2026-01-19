import { DBState, Vote } from "@/types/LocalTypes";
import { create } from "zustand";

type DBStore = DBState & {
    init: () => Promise<void>;
    addFaces: (doc: Float32Array) => Float32Array | undefined;
    getAllFaces: () => (Float32Array & LokiObj)[];
    deleteAllFromDB: () => void;
    addVotes: (vote: Vote) => Vote | undefined;
    getAllVotes: () => (Vote & LokiObj)[];
};

const useStore = create<DBStore>((get, set) => ({
    db: null,
    facesCollection: null,
    votesCollection: null,
    isReady: false,
    faces: [],
    votes: [],
    
    init: async () => {},
}));
