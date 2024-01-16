const { Client } = require("pg");

const client = new Client("postgresql://udayraj:keOhP6ndc4N01bbkiBeyYw@dense-marten-6538.8nk.cockroachlabs.cloud:26257/uday?sslmode=verify-full");
// CREATE TABLE PRODUCT_TABLE ( 
//        id serial PRIMARY KEY,    
//        product_name varchar(50), 
//        product_price integer CHECK (product_price >= 0 AND product_price <= 999) 
//     );
    
(async () => {
  await client.connect();
  try {
    const results = await client.query(`SELECT * FROM PRODUCT_TABLE`);
    console.log(results.rows);
    console.log("Database Connection");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    //client.end();
  }
})();
module.exports = client;