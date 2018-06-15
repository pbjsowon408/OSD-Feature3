var currentTheme = '';

const themes = {
  'bg1': {
    images: {
      headerURL: 'bg1.jpg',
    },
    colors: {
      accentcolor: '#4682B4',
      textcolor: '#000',
    }
  },
  'bg2': {
    images: {
      headerURL: 'bg2.jpg',
    },
    colors: {
      accentcolor: '#00008B',
      textcolor: '#87CEFA',
    }
  },
  'bg3': {
    images: {
      headerURL: 'bg3.jpg',
    },
    colors: {
      accentcolor: '#99AEFA',
      textcolor: '#555',
    }
  },
  'bg4': {
    images: {
      headerURL: 'bg4.jpg',
    },
    colors: {
      accentcolor: '#FFFFFF',
      textcolor: '#000',
    }
  },
  'bg5': {
    images: {
      headerURL: 'bg5.jpg',
    },
    colors: {
      accentcolor: '#57CEFA',
      textcolor: '#000',
    }
  },
  'bg6': {
    images: {
      headerURL: 'bg6.jpg',
    },
    colors: {
      accentcolor: '#FFE276',
      textcolor: '#026B02',
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {

    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let time = new Date();
  let gap = time.getHours();
  // Will set the sun theme between 8am and 8pm.
  if ((gap > 8) && (gap < 13)) {
    setTheme('bg1');
  }
  else if ((gap > 12) && (gap < 17)) {
    setTheme('bg2');
  }
  else if ((gap > 16) && (gap < 21)) {
    setTheme('bg3');
  }
  else if ((gap > 20) && (gap < 1)) {
    setTheme('bg4');
  }
  else if ((gap > 24) && (gap < 5)) {
    setTheme('bg5');
  }
  else {
    setTheme('bg6');
  }
}


checkTime();


browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});
