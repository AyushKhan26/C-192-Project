AFRAME.registerComponent('movement',{
    schema:{
        blimp_position: {type: 'number',default: 0},
        blimp_rotation: {type: 'number',default: 0},
    },
    init:function(){
         this.blimpMovement()
    },
    blimpMovement: function(){
        this.data.blimp_position = this.el.getAttribute('position');
        this.data.blimp_rotation = this.el.getAttribute('rotation');

        var position = this.data.blimp_position;
        var rotation = this.data.blimp_rotation;


        var hot_air_ballon = document.querySelector('#ballon');


    }
})