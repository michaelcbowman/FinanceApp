using FinanceApp.API.Models;
using FinanceApp.DAL;
using FinanceApp.DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FinanceController : ControllerBase
    {
        private readonly ILogger<FinanceController> _logger;
        private readonly FinanceRepository _financeRepository;

        public FinanceController(ILogger<FinanceController> logger, FinanceRepository financeRepository)
        {
            _logger = logger;
            _financeRepository = financeRepository;
        }

        [HttpGet(Name = "FinanceData")]
        public IEnumerable<FinanceData> GetFinanceData()
        {
            return new List<FinanceData>();
        }

        [HttpGet(Name = "Debtees")]
        public IEnumerable<Debtee> GetDebtees()
        {
            return _financeRepository.GetDebtees();
        }
    }
}
