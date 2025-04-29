AFRAME.registerComponent("hover-info", {
    schema: {
      panel: { type: "selector" }
    },
  
    init: function () {
      const el = this.el;
      const panel = this.data.panel;
  
      el.addEventListener("mouseenter", () => {
        // Move object up
        el.setAttribute("animation__up", {
          property: "position",
          to: `${el.object3D.position.x} ${el.object3D.position.y + 0.3} ${el.object3D.position.z}`,
          dur: 200,
          easing: "easeOutQuad"
        });
  
        // Show panel
        if (panel) panel.setAttribute("visible", true);
      });
  
      el.addEventListener("mouseleave", () => {
        // Move object back down
        el.setAttribute("animation__down", {
          property: "position",
          to: `${el.object3D.position.x} ${el.object3D.position.y - 0.3} ${el.object3D.position.z}`,
          dur: 200,
          easing: "easeInQuad"
        });
  
        // Hide panel
        if (panel) panel.setAttribute("visible", false);
      });
    }
  });