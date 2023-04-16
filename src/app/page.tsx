"use client";

import { useEffect, useRef, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Sub, SubsResponseFromApi } from "../../types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];


interface HomeState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

const Home = () => {
  const [subs, setSubs] = useState<HomeState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<HomeState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const fetchSubs = async (): Promise<SubsResponseFromApi[]> => {
      const res = await fetch("http://localhost:3001/subs");
      return await res.json();
    }

    const mapFromApiToSubs = (apiResponde: SubsResponseFromApi[]): Sub[] => {
      return apiResponde.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
      .then(apiSubs => {
        const subs = mapFromApiToSubs(apiSubs)
        setSubs(subs)
      })
      
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="m-auto flex flex-col items-center" ref={divRef}>
      <h1 className="font-bold text-2xl">Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
};

export default Home;
