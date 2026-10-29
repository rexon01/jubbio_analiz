import { r as _0x1df99f, j as _0x546013 } from "./index-cQfEKR1W.js";
import { u as _0x89c31f } from "./useOGLRenderer-47TQC9dC.js";
const r = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  cyan: "#00ffff",
  yellow: "#ffff00",
  orange: "#ff8000"
};
function t(_0x1dc49c) {
  if (_0x1dc49c.length === 4) {
    _0x1dc49c = _0x1dc49c[0] + _0x1dc49c[1] + _0x1dc49c[1] + _0x1dc49c[2] + _0x1dc49c[2] + _0x1dc49c[3] + _0x1dc49c[3];
  }
  const _0x3609b8 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_0x1dc49c);
  if (!_0x3609b8) {
    console.warn("Unable to convert hex string " + _0x1dc49c + " to rgb values");
  }
  return [parseInt(_0x3609b8[1], 16) / 255, parseInt(_0x3609b8[2], 16) / 255, parseInt(_0x3609b8[3], 16) / 255];
}
function i(_0x111555) {
  if (_0x111555 === undefined) {
    return [0, 0, 0];
  } else if (arguments.length === 3) {
    return arguments;
  } else if (isNaN(_0x111555)) {
    if (_0x111555[0] === "#") {
      return t(_0x111555);
    } else if (r[_0x111555.toLowerCase()]) {
      return t(r[_0x111555.toLowerCase()]);
    } else {
      console.warn("Color format not recognised");
      return [0, 0, 0];
    }
  } else {
    _0x4db318 = _0x111555;
    return [((_0x4db318 = parseInt(_0x4db318)) >> 16 & 255) / 255, (_0x4db318 >> 8 & 255) / 255, (_0x4db318 & 255) / 255];
  }
  var _0x4db318;
}
class l extends Array {
  constructor(_0x494d14) {
    if (Array.isArray(_0x494d14)) {
      return super(..._0x494d14);
    } else {
      return super(...i(...arguments));
    }
  }
  get r() {
    return this[0];
  }
  get g() {
    return this[1];
  }
  get b() {
    return this[2];
  }
  set r(_0x1dc305) {
    this[0] = _0x1dc305;
  }
  set g(_0x2577ed) {
    this[1] = _0x2577ed;
  }
  set b(_0x41bf77) {
    this[2] = _0x41bf77;
  }
  set(_0x56ea41) {
    if (Array.isArray(_0x56ea41)) {
      return this.copy(_0x56ea41);
    } else {
      return this.copy(i(...arguments));
    }
  }
  copy(_0x582dba) {
    this[0] = _0x582dba[0];
    this[1] = _0x582dba[1];
    this[2] = _0x582dba[2];
    return this;
  }
}
function u(_0x443442) {
  const {
    colorStops: _0x204dd3 = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude: _0x4d07ca = 1,
    blend: _0x35261d = 0.5
  } = _0x443442;
  const _0x1aa128 = _0x1df99f.useRef(_0x443442);
  _0x1aa128.current = _0x443442;
  const _0x37f1e2 = _0x1df99f.useRef(null);
  const _0x160e76 = _0x204dd3.map(_0x30b61f => {
    const _0x2b3309 = new l(_0x30b61f);
    return [_0x2b3309.r, _0x2b3309.g, _0x2b3309.b];
  });
  const {
    createRenderer: _0x4a0394,
    cleanupRef: _0x5a0675
  } = _0x89c31f(_0x37f1e2, {
    vertex: "#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n",
    fragment: "#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform float uAmplitude;\nuniform vec3 uColorStops[3];\nuniform vec2 uResolution;\nuniform float uBlend;\n\nout vec4 fragColor;\n\nvec3 permute(vec3 x) {\n  return mod(((x * 34.0) + 1.0) * x, 289.0);\n}\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(\n      0.211324865405187, 0.366025403784439,\n      -0.577350269189626, 0.024390243902439\n  );\n  vec2 i  = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n\n  vec3 p = permute(\n      permute(i.y + vec3(0.0, i1.y, 1.0))\n    + i.x + vec3(0.0, i1.x, 1.0)\n  );\n\n  vec3 m = max(\n      0.5 - vec3(\n          dot(x0, x0),\n          dot(x12.xy, x12.xy),\n          dot(x12.zw, x12.zw)\n      ), \n      0.0\n  );\n  m = m * m;\n  m = m * m;\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nstruct ColorStop {\n  vec3 color;\n  float position;\n};\n\n#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / uResolution;\n  \n  ColorStop colors[3];\n  colors[0] = ColorStop(uColorStops[0], 0.0);\n  colors[1] = ColorStop(uColorStops[1], 0.5);\n  colors[2] = ColorStop(uColorStops[2], 1.0);\n  \n  vec3 rampColor;\n  COLOR_RAMP(colors, uv.x, rampColor);\n  \n  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;\n  height = exp(height);\n  height = (uv.y * 2.0 - height + 0.2);\n  float intensity = 0.6 * height;\n  \n  float midPoint = 0.20;\n  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);\n  \n  vec3 auroraColor = intensity * rampColor;\n  \n  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);\n}\n",
    removeUV: true,
    premultipliedAlpha: true,
    manualBlend: true,
    uniforms: {
      uTime: {
        value: 0
      },
      uAmplitude: {
        value: _0x4d07ca
      },
      uColorStops: {
        value: _0x160e76
      },
      uResolution: {
        value: [100, 100]
      },
      uBlend: {
        value: _0x35261d
      }
    },
    onResize(_0x4a3111, _0x41016f, _0x536e2a) {
      _0x4a3111.uniforms.uResolution.value = [_0x41016f, _0x536e2a];
    },
    onFrame(_0x1f14e6, _0x2aff09) {
      const {
        time: _0x105771 = _0x2aff09 * 0.01,
        speed: _0x317f1c = 1
      } = _0x1aa128.current;
      _0x1f14e6.uniforms.uTime.value = _0x105771 * _0x317f1c * 0.1;
      _0x1f14e6.uniforms.uAmplitude.value = _0x1aa128.current.amplitude ?? 1;
      _0x1f14e6.uniforms.uBlend.value = _0x1aa128.current.blend ?? _0x35261d;
      const _0x5407c0 = _0x1aa128.current.colorStops ?? _0x204dd3;
      _0x1f14e6.uniforms.uColorStops.value = _0x5407c0.map(_0x2777a8 => {
        const _0x395ced = new l(_0x2777a8);
        return [_0x395ced.r, _0x395ced.g, _0x395ced.b];
      });
    }
  });
  _0x1df99f.useEffect(() => {
    _0x4a0394();
    return () => {
      _0x5a0675.current?.();
    };
  }, [_0x4a0394, _0x5a0675]);
  return <div ref={_0x37f1e2} className="w-full h-full" />;
}
export { u as default };