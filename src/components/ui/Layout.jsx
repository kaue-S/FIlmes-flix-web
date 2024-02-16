import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
      <Rodape />
    </>
  );
}
