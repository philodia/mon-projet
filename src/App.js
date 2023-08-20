import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
   import { Card } from 'react-bootstrap';
   import Nom from './Nom';
   import Prix from './Prix';
   import Description from './Description';
   import Image from './Image'; // Assuming the actual file is named Image.js
   import product from './Product'; // Assuming the actual file is named product.js
   import './App.css';

   const App = () => {
     const firstName = "Libasse Dia"; 

     return (
        <>
       <div className="App">
          <Card>
           <Card.Body>
             <Image src={product.image} />
             <Nom name={product.name} />
             <Prix price={product.price} />
             <Description description={product.description} />
           </Card.Body>
         </Card>
         <p className="greeting">
           {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
         </p>
       </div>
       </>
     );
   };

   export default App;
