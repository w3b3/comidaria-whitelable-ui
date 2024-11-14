import { useState } from "react";
import { useRestaurants } from "./useRestaurants";

const HeaderComponent = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
    const { data: restaurants, isLoading } = useRestaurants();
    return <div>
        <h1>Comidaria</h1>
        <pre>{restaurants?.length}</pre>
    </div>;
  }

export { HeaderComponent };