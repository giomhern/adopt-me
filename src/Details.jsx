import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet); // if it doesnt have details in cache, fetch it

  if(results.isError){
    return (
      <div>
        oh no hehehe
      </div>
    )
  }
  if(results.isLoading){
    return (
      <div className="loading-pane">
        <h2 className="loader">hehe</h2>
      </div>
    )
  }

  const pet = results.data.pets[0];


  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  )
};

export default Details;
