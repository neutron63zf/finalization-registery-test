console.log("test");

// heldValueにはregisterの第2引数が渡る
const registry = new FinalizationRegistry((heldValue) => {
  console.log("GC happened", heldValue);
});

let a = { b: { some: "object" } };

// 前半は弱参照、後半は強参照なのでこれは不正なコードになる
// registry.register(a, { ref: a });

registry.register(a.b, "a.b");

// registry.unregister(a);

a = null;

// Perform GC by clicking trash can icon in Peformance Tab in Chrome Devtools
