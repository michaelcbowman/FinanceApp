using FinanceApp.API.Models;
using FinanceApp.DAL;
using FinanceApp.DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DebteesController : ControllerBase
    {
        private readonly ILogger<DebteesController> _logger;
        private readonly FinanceRepository _financeRepository;

        public DebteesController(ILogger<DebteesController> logger, FinanceRepository financeRepository)
        {
            _logger = logger;
            _financeRepository = financeRepository;
        }

        [HttpGet]
        public IEnumerable<Debtee> GetDebtees()
        {
            return _financeRepository.GetDebtees();
        }

        [HttpPost]
        public int InsertDebtees()
        {
            return _financeRepository.InsertDebtees();
        }

        [HttpDelete]
        public int DeleteDebtees(int id)
        {
            return _financeRepository.DeleteDebtees(id);
        }
    }
}
