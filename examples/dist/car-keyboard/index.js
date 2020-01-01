const PlateCount = require('../config').PlateCount
Component({
  data: {
    plate: Array(PlateCount).fill(' ').join(''),
    currentIndex: 0,
    disabledNumber: true,
    showKeyboard: true,
  },
  methods: {
    handlePlateChoose (e) {
      // 根据当前的index进行操作
      let pArr = this.data.plate.split('');
      pArr[this.data.currentIndex] = e.detail.value;
      let currentIndex = ++this.data.currentIndex;
      // 设置 键盘方式
      let type = currentIndex < 1 ? 'province' : 'letter';
      this.selectComponent('#keyboard').changeKeyBoard(type);
      this.setData({
        plate: pArr.join(''),
        currentIndex: currentIndex < 8 ? currentIndex : 7,
        disabledNumber: currentIndex === 1
      });
      this.triggerEvent('change', {
        value: pArr.join('')
      });
    },
    handlePlateDelete () {
      let pArr = this.data.plate.split('');
      let currentIndex = this.data.currentIndex;
      if (pArr[this.data.currentIndex] !== ' ' && pArr[this.data.currentIndex] !== undefined) {
        pArr[this.data.currentIndex] = ' ';
      } else {
        currentIndex--;
        pArr[currentIndex] = ' ';
      }
      this.setData({
        plate: pArr.join(''),
        currentIndex: currentIndex < 0 ? 0 : currentIndex
      });
    },
    handleIndexChange (e) {
      this.setData({
        currentIndex: e.detail.index,
        showKeyboard: true
      });
    },
    handleClose () {
      this.setData({
        showKeyboard: false
      });
    }
  },
});
