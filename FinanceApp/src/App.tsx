import DebteeForm from './DebteeForm';
import DebteeTable from './DebteeTable';

const App = () => {
  return (
    <div>
      <h1>Debtees</h1>

      <DebteeForm />

      <hr />

      <DebteeTable />
    </div>
  );
};

export default App;