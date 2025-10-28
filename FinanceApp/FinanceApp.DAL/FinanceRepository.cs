using FinanceApp.DAL.Models;
using Microsoft.Data.SqlClient;

namespace FinanceApp.DAL
{
    public class FinanceRepository
    {

        public IEnumerable<Debtee> InsertDebtees()
        {
            string connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=FinanceApp;Trusted_Connection=True;";
            string insertQuery = "Insert INTO Debtees (DebteeName, ContactName, ContactNumber, BillingAddress, BillingState, BillingZipCode) VALUES(@DebteeName, @ContactName, @ContactNumber,@BillingAddress, @BillingState, @BillingZipCode)"; 
            var sqlConnection = new SqlConnection(connectionString);
            using (SqlConnection connection = new SqlConnection(connectionString))
            using (SqlCommand command = new SqlCommand(insertQuery, connection))
            {
                command.Parameters.AddWithValue("@DebteeName", "AEP");
                command.Parameters.AddWithValue("@ContactName", "Alice Johnson");
                command.Parameters.AddWithValue("@ContactNumber", "6149806458");
                command.Parameters.AddWithValue("@BillingAddress", "123 Apple St. Grove City");
                command.Parameters.AddWithValue("@BillingState", "Oh");
                command.Parameters.AddWithValue("@BillingZipCode", "43123");

                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                Console.WriteLine($"Inserted{rowsAffected} rows(s).");

                return new List<Debtee>();
            }
        }
    }
}
