using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Orchids.Data
{
    public partial class Playlist
    {
        public Playlist()
        {
            PlaylistTrack = new HashSet<PlaylistTrack>();
        }

        public int PlaylistId { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public ICollection<PlaylistTrack> PlaylistTrack { get; set; }
    }
}
