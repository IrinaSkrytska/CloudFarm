// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"wzuc":[function(require,module,exports) {
var slider = document.querySelector('.hero__section');
var slides = document.querySelectorAll('.hero__slide');
var dots = document.querySelectorAll('.hero__dot');
var index = 0;
var startX = 0;
var autoSlide;
function show(i) {
  index = (i + slides.length) % slides.length;
  slides.forEach(function (s, n) {
    return s.classList.toggle('is-active', n === index);
  });
  dots.forEach(function (d, n) {
    return d.classList.toggle('is-active', n === index);
  });
}
function startAutoSlide() {
  autoSlide = setInterval(function () {
    show(index + 1);
  }, 6000);
}
function stopAutoSlide() {
  clearInterval(autoSlide);
}
dots.forEach(function (dot, i) {
  dot.onclick = function () {
    stopAutoSlide();
    show(i);
    startAutoSlide();
  };
});
slider.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});
slider.addEventListener('touchend', function (e) {
  var endX = e.changedTouches[0].clientX;
  var diff = startX - endX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      show(index + 1);
    } else {
      show(index - 1);
    }
  }
  startAutoSlide();
});
show(0);
startAutoSlide();
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/CloudFarm/slider.541ee327.js.map