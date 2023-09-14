import { useContext } from "react";
import { RickAndMortyContext } from "../../Context";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { CharacterDetail } from "../../Components/CharacterDetail";
import Logo from "../../assets/logo.jpg";

export const Home = () => {
  const context = useContext(RickAndMortyContext);

  const renderView = () => {
    if (context.items?.results?.length > 0) {
      return context.items?.results?.map((item) => (
        <Card data={item} key={item.id} />
      ));
    } else {
      return <div>{"We don't have anything"}</div>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <img src={Logo} />
      </div>
      <input
        type="text"
        placeholder="Search character"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByName(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>

      <div className="flex justify-between w-1/4 py-6">
        {context.prevPage !== null && (
          <button
            onClick={() => context.chargeItemsByPagination(context.prevPage)}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Previous characters
          </button>
        )}
        {context.nextPage !== null && (
          <button
            onClick={() => context.chargeItemsByPagination(context.nextPage)}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            More characters
          </button>
        )}
      </div>

      <CharacterDetail />
    </Layout>
  );
};
