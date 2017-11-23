using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Orchids.Data
{
    public partial class Orchid
    {
        public int OrchidId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string ImgUrl { get; set; }

    }
}
