using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Orchids.Data;

namespace Orchids.Controllers
{
    [Produces("application/json")]
    [Route("api/Orchids")]
    public class OrchidsController : Controller
    {
        private readonly OrchidsContext _context;

        public OrchidsController(OrchidsContext context)
        {
            _context = context;
        }

        // GET: api/Orchids
        [HttpGet]
        public IEnumerable<Orchid> GetOrchid()
        {
            return _context.Orchid;
        }

        // GET: api/Orchids/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrchid([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orchid = await _context.Orchid.SingleOrDefaultAsync(m => m.OrchidId == id);

            if (orchid == null)
            {
                return NotFound();
            }

            return Ok(orchid);
        }

        // PUT: api/Orchids/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrchid([FromRoute] int id, [FromBody] Orchid orchid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orchid.OrchidId)
            {
                return BadRequest();
            }

            _context.Entry(orchid).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrchidExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orchids
        [HttpPost]
        public async Task<IActionResult> PostOrchid([FromBody] Orchid orchid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Orchid.Add(orchid);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrchid", new { id = orchid.OrchidId }, orchid);
        }

        // DELETE: api/Orchids/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrchid([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orchid = await _context.Orchid.SingleOrDefaultAsync(m => m.OrchidId == id);
            if (orchid == null)
            {
                return NotFound();
            }

            _context.Orchid.Remove(orchid);
            await _context.SaveChangesAsync();

            return Ok(orchid);
        }

        private bool OrchidExists(int id)
        {
            return _context.Orchid.Any(e => e.OrchidId == id);
        }
    }
}