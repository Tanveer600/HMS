using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.DataModel
{
  public class ResponseDataModel
  {
    public bool IsSuccess { get; set; }
    public string Message { get; set; }
    public Exception ErrorResponse { get; set; }
    public IEnumerable<object> Data { get; set; }
    public List<string> AddedRecords { get; set; }
    public List<string> DuplicateRecords { get; set; }
    public List<string> UpdatedRecords { get; set; }

    public ResponseDataModel()
    {
      IsSuccess = false;
      Message = "";
      ErrorResponse = null;
      Data = null;
      AddedRecords = new List<string>();
      DuplicateRecords = new List<string>();
      UpdatedRecords = new List<string>();
    }
  }
}
