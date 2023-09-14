import { useContext } from "react";
import { RickAndMortyContext } from "../../Context";

export const Card = (data) => {
  const context = useContext(RickAndMortyContext);

  const showCharacter = (characterDetail) => {
    context.openCharacterDetail();
    context.setCharacterToShow(characterDetail);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showCharacter(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black font-medium m-2  px-3 py-0.5">
          {data.data.name}
        </span>
        <img
          src={data.data.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.species}</span>
        <span className="text-lg font-medium">{data.data.status}</span>
      </p>
    </div>
  );
};
