import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Dashboard() {
  return <h1>dashboard</h1>;
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
