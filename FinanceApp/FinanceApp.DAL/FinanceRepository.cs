using FinanceApp.DAL.Models;
using Microsoft.Data.SqlClient;

namespace FinanceApp.DAL
{
    public class FinanceRepository
    {
        public IEnumerable<Debtee> GetDebtees()
        {
            string connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=FinanceApp;Trusted_Connection=True;";
            var sqlConnection = new SqlConnection(connectionString);
            return new List<Debtee>();
        }
    }
}
