using FinanceApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FinanceController : ControllerBase
    {
        private readonly ILogger<FinanceController> _logger;

        public FinanceController(ILogger<FinanceController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetFinanceData")]
        public IEnumerable<FinanceData> Get()
        {
            return new List<FinanceData>();
        }
    }
}
