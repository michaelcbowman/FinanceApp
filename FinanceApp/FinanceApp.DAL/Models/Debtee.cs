namespace FinanceApp.DAL.Models
{
    public class Debtee
    {
        public int Id { get; set; }
        public required string DebteeName { get; set; }
        public string? ContactFirstName { get; set; }
        public string? ContactLastName { get; set; }
        public string? ContactNumber { get; set; }
        public string? BillingAddress { get; set; }
        public string? BillingCity { get; set; }
        public string? BillingState { get; set; }
        public int? BillingZipCode { get; set; }
    }
}
