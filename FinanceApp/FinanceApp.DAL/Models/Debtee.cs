namespace FinanceApp.DAL.Models
{
    public class Debtee
    {
        public required string DebteeName { get; set; }
        public string? ContactName { get; set; }
        public string? ContactNumber { get; set; }
        public string? BillingAddress { get; set; }
        public string? BillingState { get; set; }
        public string? BillingZipCode { get; set; }
    }
}
