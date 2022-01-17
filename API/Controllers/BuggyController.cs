using API.Controllers;
using Microsoft.AspNetCore.Mvc;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }
    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
        return NotFound(new ProblemDetails { Title = "This is a bad request" });
    }
    [HttpGet("unauthorized")]
    public ActionResult GetUnauthorised()
    {
        return Unauthorized();
    }
    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "This is first error");
        ModelState.AddModelError("Problem2", "This is the second error");
        return ValidationProblem();
    }
    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
        throw new Exception("This is a server error");
    }
}