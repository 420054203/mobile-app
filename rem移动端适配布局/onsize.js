(function (doc, win) {
  var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth; if (!clientWidth) return; if (clientWidth >= 1200) {//当屏幕宽度大于等于1200的时候不管它						
      }
      else if (clientWidth >= 1000) {//当屏幕宽度大于等于1000的时候//除以1000意思是占用当前屏幕比例的多少，除的的越大占用的比例越小，除的越小占用的比例越大				
        docEl.style.fontSize = 100 * (clientWidth / 1000) + 'px';
      } else if (clientWidth >= 750) { docEl.style.fontSize = 100 * (clientWidth / 850) + 'px'; } else if (clientWidth >= 600) { docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; } else if (clientWidth >= 450) { docEl.style.fontSize = 100 * (clientWidth / 650) + 'px'; } else if (clientWidth >= 375) { docEl.style.fontSize = 100 * (clientWidth / 520) + 'px'; } else if (clientWidth >= 320) { docEl.style.fontSize = 100 * (clientWidth / 450) + 'px'; }
    }; if (!doc.addEventListener) return; win.addEventListener(resizeEvt, recalc, false); doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)
