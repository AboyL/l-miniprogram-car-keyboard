// components/base/car-keyboard/index.js

const PlateCount = 8;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    plate: {
      type: String,
      observer (v) {
        // 对内容进行处理
        const innerPlate = this.data.innerPlate.map((_, index) => v[index] || '');
        this.setData({
          innerPlate
        });
      }
    },
    currentIndex: {
      type: Number
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    innerPlate: []
  },
  ready () {
    this.setData({
      innerPlate: Array(PlateCount).fill(''),
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClickPlate (e) {
      this.triggerEvent('indexChange', {
        index: e.mark.index
      });
    }
  }
});
