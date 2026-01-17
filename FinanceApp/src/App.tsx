import { useState } from 'react'
import './App.css'

type Debtee = {
  id: number;
  debteeName: string;
  contactFirstName: string;
  contactLastName: string;
  contactNumber: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: number;
}
 
function App() {
  const [debtees, setDebtees] = useState<Debtee[]>([]);
  const [debteeName, setDebteeName] = useState(''); 
  const [contactFirstName, setContactFirstName] = useState(''); 
  const [contactLastName, setContactLastName] = useState(''); 
  const [contactNumber, setContactNumber] = useState(''); 
  const [billingAddress, setBillingAddress] = useState(''); 
  const [billingCity, setBillingCity] = useState(''); 
  const [billingState, setBillingState] = useState(''); 
  const [billingZipCode, setBillingZipCode] = useState(0); 

  const addDebtee = (newDebtee : Debtee) => {
    setDebtees(prevDebtees => [...prevDebtees, newDebtee]);
  };

  const handleAddDebtee = () => {
    addDebtee({
      id: 1,
      debteeName: debteeName,
      contactFirstName: contactFirstName,
      contactLastName: contactLastName,
      contactNumber: contactNumber,
      billingAddress: billingAddress,
      billingCity: billingCity,
      billingState: billingState,
      billingZipCode: billingZipCode
    });
    setDebteeName('');
    setContactFirstName('');
    setContactLastName('');
    setContactNumber('');
    setBillingAddress('');
    setBillingCity('');
    setBillingState('');
    setBillingZipCode(0);
  };



  return (
    <>
      <input 
        type='text' 
        placeholder='Debtee Name' 
        value={debteeName}
        onChange={e => setDebteeName(e.target.value)}
      />
      <div>
        <button onClick={handleAddDebtee}>Add Debtee</button>
        
      </div>
      <ul>
        {debtees.map(debtee => (
          <li key={debtee.id}>
            {debtee.debteeName}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
