import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { RickAndMortyContext } from "../../Context";
import "./styles.css";

export const CharacterDetail = () => {
  const context = useContext(RickAndMortyContext);
  const { image, name, status, species, location, gender, type } =
    context.characterToShow;

  return (
    <aside
      className={`${
        context.isCharacterDetailOpen ? "flex" : "hidden"
      } character-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl ">{name}</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 black cursor-pointer"
            onClick={() => context.closeCharacterDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={image} alt={name} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-light text-md">Species: {species}</span>
        <span className="font-light text-md">Status: {status}</span>
        <span className="font-light text-md">Location: {location?.name}</span>
        <span className="font-light text-md">Gender: {gender}</span>
        <span className="font-light text-md">Type: {type}</span>
      </p>
    </aside>
  );
};
