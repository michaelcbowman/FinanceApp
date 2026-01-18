using FinanceApp.DAL.Models;
using Microsoft.Data.SqlClient;

namespace FinanceApp.DAL
{
    public class FinanceRepository
    {
        private string _connectionString = string.Empty;

        public FinanceRepository()
        {
            _connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=FinanceApp;Trusted_Connection=True;";
        }
        public IEnumerable<Debtee> GetDebtees()
        {
            List<Debtee> debtees = new List<Debtee>();
            string getQuery =
                @"SELECT [DebteeName],
                    [ContactName],
                    [ContactNumber],
                    [BillingAddress],
                    [BillingState],
                    [BillingZipCode]
                FROM [FinanceApp].[dbo].[Debtees]";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(getQuery, connection))
                using (SqlDataReader reader = command.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        var debtee = new Debtee()
                        {

                            DebteeName = reader["DebteeName"].ToString() ?? string.Empty,
                            ContactFirstName = reader["ContactFirstName"].ToString() ?? string.Empty,
                            ContactLastName = reader["ContactLastName"].ToString() ?? string.Empty,
                            ContactNumber = reader["ContactNumber"].ToString() ?? string.Empty,
                            BillingAddress = reader["BillingAddress"].ToString() ?? string.Empty,
                            BillingCity = reader["BillingCity"].ToString() ?? string.Empty,
                            BillingState = reader["BillingState"].ToString() ?? string.Empty,
                            BillingZipCode = reader.IsDBNull(reader.GetOrdinal("BillingZipCode"))
                                ? 0
                                : reader.GetInt32(reader.GetOrdinal("BillingZipCode"))
                        };
                        debtees.Add(debtee);

                    }
                }
            }
            return debtees;
        }

        public int InsertDebtees()
        {
            string insertQuery =
                @"Insert INTO Debtees 
                    (DebteeName, 
                    ContactName, 
                    ContactNumber, 
                    BillingAddress, 
                    BillingState, 
                    BillingZipCode) 
                     
                VALUES
                    (@DebteeName, 
                    @ContactName, 
                    @ContactNumber,
                    @BillingAddress, 
                    @BillingState, 
                    @BillingZipCode)";

            using (SqlConnection connection = new SqlConnection(_connectionString))
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

                return rowsAffected;
            }
        }

        public int DeleteDebtees(int id)
        {
            var deleteSqlRow =
                @"DELETE
                from Debtees
                WHERE Id = @Id";

            using (SqlConnection connection = new SqlConnection(_connectionString))
            using (SqlCommand command = new SqlCommand(deleteSqlRow, connection))
            {
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
}
