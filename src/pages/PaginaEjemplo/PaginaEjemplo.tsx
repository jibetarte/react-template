import { useQuery } from "react-query";
import { apiClient } from "../../api";

interface DataPrueba {
  id: number;
  nombre: string;
}
function PaginaEjemplo() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dataPrueba"],
    queryFn: async () => {
      const response = await apiClient.get("/dataPrueba");
      return response.data as DataPrueba[];
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h1>Página de ejemplo</h1>
      <p>Esta es una página de ejemplo</p>
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
        </div>
      ))}
    </div>
  );
}

export default PaginaEjemplo;
