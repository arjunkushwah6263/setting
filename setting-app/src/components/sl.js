import React, { useState,  } from 'react';
import media from './images/media.png';
import alarm from './images/alarm.png';
import ringtone from './images/ringtone.png';
import notification from './images/notification.png';
import { Link } from "react-router-dom";
import backword from './images/backword.png';
function SoundAndVibration() {
  const [mediaVolume, setMediaVolume] = useState(50); // Initialize the volume to 50%
  const [ringtoneVolume, setRingtoneVolume] = useState(50);
  const [alarmVolume, setAlarmVolume] = useState(50);
  const [notificationVolume, setNotificationVolume] = useState(50);
  const [soundMode, setSoundMode] = useState('ringing');
  

  
  const setVolume = (soundType, volume) => {
    switch (soundType) {
      case 'media':
        setMediaVolume(volume);
        break;
      case 'ringtone':
        setRingtoneVolume(volume);
        break;
      case 'alarm':
        setAlarmVolume(volume);
        break;
      case 'notification':
        setNotificationVolume(volume);
        break;
      default:
        break;
    }
  };
  const handleSoundModeChange = (e) => {
    setSoundMode(e.target.value);
  };
  return (
    <div>
      <div style={{ marginBottom: '30px', 
    marginTop: '30px'}}> <Link to="/"><img src={backword}   alt="" className="my-image"/></Link>Sound & vibration</div>
      <hr/>
  
     <div style={{fontSize: '17px'}} className="my-li"> Sound Mode:
      <select style={{ color: 'blue' }} value={soundMode} onChange={handleSoundModeChange}>
        <option value="soundOn">ringing</option>
        <option value="vibrate">Vibrate</option>
        <option value="silent">Silent</option>
      </select>
      </div>


      <hr/>
      <div style={{ marginBottom: '30px', marginTop: '30px'  }}>VOLUME:</div>
      <div className="volume-control">
        <div style={{fontSize: '17px'}}> <img src={media}   alt="" className="my-image"/>Media :</div>
        <label> {mediaVolume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={mediaVolume}
          onChange={(e) => setVolume('media', e.target.value)}
        />
      </div>
      

      <div className="volume-control">
        <div style={{fontSize: '17px'}} > <img src={ringtone}   alt="" className="my-image"/>Ringtone :</div>
        <label> {ringtoneVolume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ringtoneVolume}
          onChange={(e) => setVolume('ringtone', e.target.value)}
        />
      </div>
      

      <div className="volume-control">
        <div style={{fontSize: '17px'}}> <img src={alarm}   alt="" className="my-image"/>Alarm :</div>
        <label> {alarmVolume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={alarmVolume}
          onChange={(e) => setVolume('alarm', e.target.value)}
        />
      </div>
      

      <div className="volume-control">
        <div style={{fontSize: '17px'}}> <img src={notification}   alt="" className="my-image"/>Notification :</div>
        <label> {notificationVolume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={notificationVolume}
          onChange={(e) => setVolume('notification', e.target.value)}
        />
      </div>
      <hr/>
      <div style={{fontSize: '17px'}} className="my-list">
        Volume button function
        <div style={{ color: 'blue', fontSize: '16px' }}>media volume</div>
      </div>
      <hr/>
      <div style={{fontSize: '17px'}} className="my-list">
        Ringtone
        <div style={{ color: 'blue', fontSize: '16px' }}>Jio 4g: it's realme</div>
        <div style={{ color: 'blue', fontSize: '16px' }}>Airtel 4g: it's realme</div>
        
      </div>
      <div style={{fontSize: '17px'}} className="my-list">
        Massage tune
        <div style={{ color: 'blue', fontSize: '16px' }}>Jio 4g: tunes</div>
        <div style={{ color: 'blue', fontSize: '16px' }}>Airtel 4g: realme jungle</div>
      </div>
      <div style={{fontSize: '17px'}} className="my-list">
        Notification sound
        <div style={{ color: 'blue', fontSize: '16px' }}>realme jungle</div>
      </div>
      <hr/>
      
    </div>
  );
}

export default SoundAndVibration;
