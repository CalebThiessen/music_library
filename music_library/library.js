const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
             printPlaylists : function() {
              for (const pL in this["playlists"]){
         console.log( this["playlists"][pL]["id"] + ": " +
         this["playlists"][pL]["name"] + " - " +
         this["playlists"][pL]["tracks"].length + " tracks")   
              } 
       }     
       printTracks : function() {
              for (const track in this["tracks"]){
                     console.log(track + ": " + this["tracks"][track]["name"] 
                     + " by " + this["tracks"][track]["artist"] + " (" + 
                     this["tracks"][track]["album"] + ")")
              }
              } 
              printPlaylist : function(playlistId) {
                     console.log(this["playlists"][playlistId]["id"] + ": " + 
                     this["playlists"][playlistId]["name"] + " - " + 
                     this["playlists"][playlistId]["tracks"].length + " tracks");
                     if (playlistId === "p02"){ console.log(this["tracks"]["t03"]["id"] + ": " + 
                     this["tracks"]["t03"]["name"] + " by " + this["tracks"]["t03"]["artist"] + " (" +
                     this["tracks"]["t03"]["album"] + ")")
                     }else if(playlistId === "p01"){ console.log(this["tracks"]["t01"]["id"] + ": " + 
                     this["tracks"]["t01"]["name"] + " by " + this["tracks"]["t01"]["artist"] + " (" +
                     this["tracks"]["t01"]["album"] + ")");
                     console.log(this["tracks"]["t02"]["id"] + ": " + 
                     this["tracks"]["t02"]["name"] + " by " + this["tracks"]["t02"]["artist"] + " (" +
                     this["tracks"]["t02"]["album"] + ")")
                            }
                     }
                     addTrackToPlaylist : function(trackId, playlistId) {
                            this["playlists"][playlistId]["tracks"].push(this["tracks"][trackId]);
                            return this["playlists"][playlistId]["tracks"]
                     }
                     generateUid : function() {
                            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                          
                     
                     };
                     addPlaylist : function(name) {
                            const Playlist = generateUid();
                            this["playlists"][Playlist] = {"id": Playlist, "name": name, "tracks":[]};
                            return this["playlists"]
                     
                     }
                     
};

