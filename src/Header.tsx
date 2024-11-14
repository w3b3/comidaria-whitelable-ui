import { useRestaurants } from "./useRestaurants";

const HeaderComponent = () => {
  const { data: restaurants, isLoading } = useRestaurants();
  return (
    <div>
      <h1>Comidaria</h1>
      {/* hide the following component if the query did not load */}
      {isLoading ? <h2>Loading...</h2> : <h2>❌ {restaurants?.length} ❌</h2>}
    </div>
  );
};

export { HeaderComponent };
