cc.Class({
    extends: cc.Component,

    properties: {
        jumpDuration: 2,
        jumpHeight: 300
    },
    ballJumpAction: function () {
        //向上跳动
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        //下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        //不断重复
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));

    },
    // use this for initialization
    onLoad: function () {
        this.jumpAction = this.ballJumpAction();
        this.node.runAction(this.jumpAction);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    start(){
        
    }
});