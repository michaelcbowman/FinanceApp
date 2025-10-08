using FinanceApp.DAL.Models;

namespace FinanceApp.DAL
{
    public class FinanceRepository
    {
        public IEnumerable<Debtee> GetDebtees()
        {
            return new List<Debtee>();
        }
    }
}
