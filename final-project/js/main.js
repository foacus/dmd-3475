AFRAME.registerComponent("revolver", {
    init: function () {
      this.isUp = false;
    },
    events: {
      click: function (e) {
          const el = this.el;
          const panel = document.querySelector('#revovlerInfoText');
          panel.setAttribute("visible", !panel.getAttribute("visible"));

          if(this.isUp == false){
            this.isUp = true;
            el.setAttribute("position","-0.647 1 -2.567")
            el.setAttribute("rotation","9.215 -69.728 -2.567")
        } else {
            this.isUp = false;
            el.setAttribute("position","-0.647 0.696 -2.567")
            el.setAttribute("rotation","-0.269 -47.830 90.698")
        }
      },
    }
  });

  AFRAME.registerComponent("badge", {
    init: function () {
      this.isUp = false;
    },
    events: {
      click: function (e) {
          const el = this.el;
          const panel = document.querySelector('#badgeInfoText');
          panel.setAttribute("visible", !panel.getAttribute("visible"));

          if(this.isUp == false){
            this.isUp = true;
            el.setAttribute("position","-0.050 1.199 -2.685")
            el.setAttribute("rotation","53.633 -34.346 -30.063")
        } else {
            this.isUp = false;
            el.setAttribute("position","-0.050 0.687 -2.685")
            el.setAttribute("rotation","2.908 -19.571 -2.275")
        }
      },
    }
  });

  AFRAME.registerComponent("poster", {
    init: function () {
      this.isUp = false;
    },
    events: {
      click: function (e) {
          const el = this.el;
          const panel = document.querySelector('#posterInfoText');
          panel.setAttribute("visible", !panel.getAttribute("visible"));

          if(this.isUp == false){
            this.isUp = true;
            el.setAttribute("position","0.675 1.000 -2.685")
            el.setAttribute("rotation","8.859 -86.524 -80.970")
        } else {
            this.isUp = false;
            el.setAttribute("position","0.675 0.685 -2.685")
            el.setAttribute("rotation","0.553 -62.998 0.646")
        }
      },
    }
  });