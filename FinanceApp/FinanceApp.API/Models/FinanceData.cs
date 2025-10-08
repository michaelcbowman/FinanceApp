namespace FinanceApp.API.Models
{
    public class FinanceData
    {
        public required string DebtorName { get; set; }
        public decimal AmountOwed { get; set; }
        public DateOnly Date { get; set; }
        public string? Comments { get; set; }
        public required string DebtType { get; set; }
    }
}
