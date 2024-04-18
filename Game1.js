AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },
    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });

  AFRAME.registerComponent('collison-check', {
    schema: {
      el: {
        type: 'selector'
      },
      radius: {
        default: 0
      },
      otherRadius: {
        default: 0
      }
    },
    tick: function () {
      var el1 = this.el;
      var el2 = this.data.el;
      var dist = el1.object3D.getWorldPosition().distanceTo(el2.object3D.getWorldPosition());
      if (dist < this.data.radius + this.data.otherRadius) {
        //this.el.emit('collide');
        document.querySelector('#win-screen').emit('fade');
        document.querySelector('#win-text').emit('fade');
        console.log("touch");
      }
    }
  });