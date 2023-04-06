import styles from "../../styles/customers.module.css";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr>
                  <td data-label="Name">{c.name}</td>
                  <td data-label="Email">{c.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Customers;