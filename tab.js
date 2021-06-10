let options = ['vue-tab', 'react-tab', 'angular-tab', 'other-tab'];
let lastIndex = 0;

const setTab = (newIndex) => {
  if (newIndex != lastIndex) {
    //Header Options
    setTabClass(
      `${options[newIndex]}-option`,
      `isActive ${newIndex < lastIndex ? 'right' : 'left'}`
    );
    setTabClass(`${options[lastIndex]}-option`, '');

    //Tab Body
    setTabClass(`${options[newIndex]}-body`, 'isActive');
    setTabClass(`${options[lastIndex]}-body`, '');

    //Backup
    lastIndex = newIndex;
  }
};

const setTabClass = (id, newClass) => {
  document.getElementById(id).setAttribute('class', newClass);
};
