const CHINESE_KEY = '英';
const ENGLISH_KEY = '中';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    provincesList: {
      type: Array,
      value: ['京', '沪', '粤', '津', '冀', '晋', '蒙', '辽', '吉', '黑',
        '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂',
        '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁',
        CHINESE_KEY, '新', '使', '领', '警', '学', '港', '澳']
    },
    letterList: {
      type: Array,
      value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', ENGLISH_KEY, 'U', 'V', 'W', 'X', 'Y', 'Z'
      ]
    },
    // 数字键盘是否可用
    disabledNumber: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentKeyBoard: [],
    currentKeyBoardName: 'province-keyboard',
  },
  ready () {
    this.setData({
      currentKeyBoard: this.properties.provincesList
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeKeyBoard (type) {
      if (type === 'province') {
        this.setData({
          currentKeyBoard: this.properties.provincesList,
          currentKeyBoardName: 'province-keyboard',
        });
      }
      if (type === 'letter') {
        this.setData({
          currentKeyBoard: this.properties.letterList,
          currentKeyBoardName: 'letter-keyboard',
        });

      }

    },
    handleClickKey (e) {
      const { key } = e.mark;
      if (key === '') {
        return;
      }
      // 对中英文键盘进行切换
      if (key === CHINESE_KEY) {
        // 切换到英文键盘
        this.changeKeyBoard('letter');
        return;
      }
      if (key === ENGLISH_KEY) {
        // 切换到中文键盘
        this.changeKeyBoard('province');
        return;
      }
      // 在不能选择数字的时候也进行返回
      if (/\d/.test(key) && this.properties.disabledNumber) {
        return;
      }
      // 传出字符
      this.triggerEvent('choose', {
        value: key
      });
    },
    handleDelete () {
      // 如果此时值为空,则退到下格子
      this.triggerEvent('delete');
    },
    handleClose () {
      this.triggerEvent('close');
    },
  }
});
