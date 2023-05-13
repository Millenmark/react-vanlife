import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => console.log(res))
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans)

  return <div>Vans</div>;
};

export default Vans;
