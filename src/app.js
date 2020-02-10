import Router from "@frontend.js/router";
import Component from "@frontend.js/core";
import template from "./index.html";

new Router([
  {
    route: "",
    load: () => {
      location.hash = "/home";
    }
  },
  {
    route: "home",
    load: params => {
      console.log("home route", params);
    }
  },
  {
    route: "*",
    load: () => {
      console.log("unknown route");
    },
    unload: () => {
      console.log("leaving unknown route");
    }
  }
]);

new Component({
  root: "#app",
  template: template
});
