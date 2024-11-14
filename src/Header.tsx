import { useRestaurants } from "./useRestaurants";

const HeaderComponent = () => {
  const { data, error, isLoading } = useRestaurants();
  if (error) return <h2>❌ Error loading restaurants {error.message} ❌</h2>
  if (isLoading) return <h2>💡 Loading...</h2>
  
  return (
    <div>
      <h1>Comidaria</h1>
      <h2>✅ {data} ✅</h2>
    </div>
  );
};

export { HeaderComponent };
