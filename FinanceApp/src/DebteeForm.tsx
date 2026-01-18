import { useForm } from 'react-hook-form';
import { useAddDebtee } from './useAddDebtee'; // Import the hook from above

// Define the type for a single debtee (adjust as needed for your app)
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
};

const DebteeForm = () => {
    // Use React Hook Form to manage inputs
    const { register, handleSubmit, reset } = useForm<Debtee>();
    // Use our custom mutation hook
    const { mutate, isPending, isError, error } = useAddDebtee();

    // This is the function that receives the validated 'data' object
    const onSubmit = (data: Debtee) => {
        mutate(data); // Pass the data to the API call
        reset(); // Optionally reset the form fields after submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('debteeName', {required: true})} />
            </div>
            <div>
                <input {...register('contactFirstName',{required: true})} />
            </div>
            <div>
                <input {...register('contactLastName',{required: true})} />
            </div>
            <div>
                <input {...register('contactNumber',{required: true})} />
            </div>
            <div>
                <input {...register('billingAddress',{required: true})} />
            </div>
            <div>
               <input {...register('billingCity',{required: true})} />
            </div>
            <div>
                <input {...register('billingState',{required: true})} />
            </div>
            <div>
                <input {...register('billingZipCode',{required: true})} />
            </div>
            
            <button type="submit" disabled={isPending}>
                {isPending ? 'Saving...' : 'Add Debtee'}
            </button>
            {isError && <p>Error submitting data: {error.message}</p>}
        </form>
    );
};

export default DebteeForm;