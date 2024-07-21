var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
var konamiCodeIndex = 0;

function checkKonamiCode(event) {
  if (event.code === konamiCode[konamiCodeIndex]) {
    konamiCodeIndex++;
    if (konamiCodeIndex === konamiCode.length) {
      funcKonamiCode();
      konamiCodeIndex = 0;
    }
  } else {
    konamiCodeIndex = 0;
  }
}

function funcKonamiCode() {
  alert('Note from developer (ycat) - :)');
}

document.addEventListener('keydown', checkKonamiCode);


dcstatus = document.getElementById('dc-status');
dcactivity = document.getElementById('dc-activity');
dcsong = document.getElementById('dc-song');
dcactivityplaceholder = document.getElementById('dc-activity-placeholder');
const dcsongregex = /\s*feat\..*?(?=\s*\[|\s*\()|\s*\[.*?\]|\s*\(.*?\)/gi;
// the amount of skill needed to make ^this regex is insane >:)
const lanyardApiUrl = "https://api.lanyard.rest/v1/users/1118160281810501774"; 
    async function fetchDc() { 
      response = await fetch(lanyardApiUrl); 
      
      data = await response.json();
      lanyard = data.data;
      
      console.log(lanyard.discord_status);
      switch(lanyard.discord_status) {
        case "online":
          dcstatus.innerHTML = '<img src="https://img.icons8.com/ios-filled/5ba150/16/filled-circle.png"> online';
        break;
        case "dnd":
          dcstatus.innerHTML = '<img src="https://img.icons8.com/ios-filled/e04338/16/do-not-disturb.png"> dnd';
        break;
        case "idle":
          dcstatus.innerHTML = '<img src="https://img.icons8.com/bfc94f/16/do-not-disturb-2-filled.png"> idle';
        break;
        default:
          dcstatus.innerHTML = '<img src="https://img.icons8.com/b3b3b3/16/circled.png"> offline';
          dcactivityplaceholder.src = 'https://img.icons8.com/FFFFFF/16/monitor.png';
          dcactivity.innerHTML = 'Offline...';
          dcsong.innerHTML = 'Offline...';
          return 0;          
      }
      
      if(lanyard.activities != "") {
        if((lanyard.activities[1].name = 'Visual Studio Code') || (lanyard.activities[1].name = 'MS WORD')) {
          dcactivityplaceholder.src = 'https://img.icons8.com/FFFFFF/16/code.png';
          dcactivity.innerHTML = 'Programming';
        } else {
          dcactivityplaceholder.src = 'https://img.icons8.com/FFFFFF/16/monitor.png';
          dcactivity.innerHTML = lanyard.activities[1].name;
        }
      } else {
        dcactivityplaceholder.src = 'https://img.icons8.com/FFFFFF/16/monitor.png';
        dcactivity.innerHTML = 'Nothing...';
      }

      console.log(lanyard.listening_to_spotify);

      if(lanyard.listening_to_spotify) {
        dcsong.innerHTML = lanyard.spotify.song.replace(dcsongregex, '').trim();;
      } else {
        dcsong.innerHTML = 'Nothing...';
      }
    } 

document.getElementById('dc-refresh').click();

// cashvib

document.getElementById('intro-cat').addEventListener('click', function() {
  var audio = document.getElementById('bg-music');
  audio.play();
});
