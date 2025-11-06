const JS_TEXT_LINE_ONE   = "Hello, my name is Maria Sol Gosende".trim();
const JS_TEXT_LINE_TWO   = "And this is my step I on becoming a Software Engineer".trim();
const JS_TYPING_SPEED_MS = 70;
const JS_DELAY_BETWEEN_LINES_MS = 800;

window.JSTypingState = {
  line1Done: false,
  line2Done: false
};

const JSTextLineOneEl = document.getElementById("text1");
const JSTextLineTwoEl = document.getElementById("text2");
const JSCursorOneEl   = document.getElementById("cursor1");
const JSCursorTwoEl   = document.getElementById("cursor2");
const JSCursorFollow  = document.getElementById("cursor-follow");

function JSShowCursor(el)  { if (el) el.classList.add("is-visible"); }
function JSHideCursor(el)  { if (el) el.classList.remove("is-visible"); }
function JSDispatch(name)  { document.dispatchEvent(new CustomEvent(name)); }

(function JSPreventCaretSelection() {
  const root = document.querySelector(".container");
  if (!root) return;
  root.addEventListener("mousedown", (e) => { e.preventDefault(); root.blur(); });
  window.addEventListener("mouseup", () => {
    const sel = window.getSelection && window.getSelection();
    if (sel && sel.removeAllRanges) sel.removeAllRanges();
  });
})();

(function JSTypewriter() {
  let line1Index = 0;
  let line2Index = 0;

  JSShowCursor(JSCursorOneEl);
  JSHideCursor(JSCursorTwoEl);

  function typeLineOne() {
    if (line1Index < JS_TEXT_LINE_ONE.length) {
      JSTextLineOneEl.textContent += JS_TEXT_LINE_ONE.charAt(line1Index++);
      setTimeout(typeLineOne, JS_TYPING_SPEED_MS);
    } else {
      JSHideCursor(JSCursorOneEl);
      window.JSTypingState.line1Done = true;
      JSDispatch("typing:line1-done");

      JSShowCursor(JSCursorTwoEl);
      setTimeout(typeLineTwo, JS_DELAY_BETWEEN_LINES_MS);
    }
  }

  function typeLineTwo() {
    JSShowCursor(JSCursorTwoEl);
    if (line2Index < JS_TEXT_LINE_TWO.length) {
      JSTextLineTwoEl.textContent += JS_TEXT_LINE_TWO.charAt(line2Index++);
      setTimeout(typeLineTwo, JS_TYPING_SPEED_MS);
    } else {
      window.JSTypingState.line2Done = true;
      JSDispatch("typing:line2-done");
      JSShowCursor(JSCursorTwoEl);
    }
  }

  typeLineOne();
})();

(function JSCustomFollower() {
  if (!JSCursorFollow) return;

  [
    "assets/keys/m.png","assets/keys/s.png","assets/keys/p.png","assets/keys/g.png",
    "assets/keys/o.png","assets/keys/s1.png","assets/keys/e.png","assets/keys/n.png",
    "assets/keys/d.png","assets/keys/e1.png"
  ].forEach(src => { const i = new Image(); i.src = src; });

  const frames = [
    { src: "assets/keys/m.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/s.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/p.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/g.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/o.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/s1.png", tipX: 48, tipY: 20 },
    { src: "assets/keys/e.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/n.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/d.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/e1.png", tipX: 48, tipY: 20 }
  ];

  let frameIndex = 0;
  function applyFrame(i) {
    const f = frames[i % frames.length];
    JSCursorFollow.src = f.src;
    document.documentElement.style.setProperty("--tip-x", (f.tipX || 0) + "px");
    document.documentElement.style.setProperty("--tip-y", (f.tipY || 0) + "px");
  }
  applyFrame(frameIndex);

  let posX = 0, posY = 0;
  let targetX = innerWidth * 0.85, targetY = innerHeight * 0.2;
  const followSpeed = 0.25;
  const stepDistance = 14;
  let lastMouseX = targetX, lastMouseY = targetY, accum = 0;

  function raf() {
    posX += (targetX - posX) * followSpeed;
    posY += (targetY - posY) * followSpeed;
    JSCursorFollow.style.left = posX + "px";
    JSCursorFollow.style.top  = posY + "px";
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX; targetY = e.clientY;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    accum += Math.hypot(dx, dy);
    if (accum >= stepDistance) {
      frameIndex = (frameIndex + 1) % frames.length;
      applyFrame(frameIndex);
      accum = 0;
    }
    lastMouseX = e.clientX; lastMouseY = e.clientY;
  }, { passive: true });
})();





