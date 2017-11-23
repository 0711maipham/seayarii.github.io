using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Orchids.Data
{
    public partial class Genre
    {
        public Genre()
        {
            Track = new HashSet<Track>();
        }

        public int GenreId { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public ICollection<Track> Track { get; set; }
    }
}
