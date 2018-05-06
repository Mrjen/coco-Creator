// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        accl: 0,  // 飞机飞行速度
        plane: {  // 飞机节点
            default: null,
            type: cc.Node
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    setInputContronl(){
      var self = this;
      var listener = {
          event: cc.EventListener.KEYBOARD,
          onKeyPressed(keyCode, event){
             switch (keyCode) {
                case cc.KEY.a:
                    self.accLeft = true;
                    break;
                case cc.KEY.w:
                  self.accUp = true;
                  break;
                case cc.KEY.d:
                    self.accRight = true;
                    break;
                case cc.KEY.s:
                    self.accDown = true;
                    break;
             }
          },
          onKeyReleased(keyCode, event){
             switch (keyCode) {
                 case cc.KEY.a:
                     self.accLeft = false;
                     break;
                 case cc.KEY.w:
                     self.accUp = false;
                     break;
                 case cc.KEY.d:
                     self.accRight = false;
                     break;
                 case cc.KEY.s:
                     self.accDown = false;
                     break;
             }
          }
      }
      cc.eventManager.addListener(listener, self.node)
    },

    onLoad () {
        // 方向
        this.accLeft = false;
        this.accRight = false;
        this.accUp = false;
        this.accDown = false;
        this.setInputContronl();
    },

    start () {

    },

    update (dt) {
        if(this.accLeft){
            this.plane.x -= this.accl;
        }
        if (this.accRight) {
            this.plane.x += this.accl;
        }
        if (this.accUp) {
            this.plane.y += this.accl;
        }
        if (this.accDown) {
            this.plane.y -= this.accl;
        }
    },
});
