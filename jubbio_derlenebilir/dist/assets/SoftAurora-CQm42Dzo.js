import { r as _0x1aace3, j as _0x4e49f4 } from "./index-cQfEKR1W.js";
import { u as _0x12ce0d } from "./useOGLRenderer-47TQC9dC.js";
function t(_0x4a8bbb) {
  const _0x2c2afe = _0x4a8bbb.replace("#", "");
  return [parseInt(_0x2c2afe.slice(0, 2), 16) / 255, parseInt(_0x2c2afe.slice(2, 4), 16) / 255, parseInt(_0x2c2afe.slice(4, 6), 16) / 255];
}
function u({
  speed: _0x4fec70 = 0.6,
  scale: _0x746174 = 1.5,
  brightness: _0x1cad8c = 1,
  color1: _0x1b79e1 = "#f7f7f7",
  color2: _0x150e16 = "#e100ff",
  noiseFrequency: _0x2d150f = 2.5,
  noiseAmplitude: _0x90f75f = 1,
  bandHeight: _0x1f7ee9 = 0.5,
  bandSpread: _0x27ad26 = 1,
  octaveDecay: _0x2813e5 = 0.1,
  layerOffset: _0x4a4946 = 0,
  colorSpeed: _0x4ef937 = 1,
  enableMouseInteraction: _0x4ea314 = true,
  mouseInfluence: _0x3dfa21 = 0.25
}) {
  const _0x4d88b3 = _0x1aace3.useRef(null);
  const _0x24d819 = _0x1aace3.useRef([0.5, 0.5]);
  const _0x3e86c5 = _0x1aace3.useRef([0.5, 0.5]);
  const _0x5a51f4 = _0x1aace3.useRef(null);
  const {
    createRenderer: _0x21df4e,
    cleanupRef: _0x4e2d55
  } = _0x12ce0d(_0x4d88b3, {
    vertex: "\nattribute vec2 uv;\nattribute vec2 position;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0, 1);\n}\n",
    fragment: "\nprecision highp float;\n\nuniform float uTime;\nuniform vec3 uResolution;\nuniform float uSpeed;\nuniform float uScale;\nuniform float uBrightness;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform float uNoiseFreq;\nuniform float uNoiseAmp;\nuniform float uBandHeight;\nuniform float uBandSpread;\nuniform float uOctaveDecay;\nuniform float uLayerOffset;\nuniform float uColorSpeed;\nuniform vec2 uMouse;\nuniform float uMouseInfluence;\nuniform bool uEnableMouse;\n\n#define TAU 6.28318\n\nvec3 gradientHash(vec3 p) {\n  p = vec3(\n    dot(p, vec3(127.1, 311.7, 234.6)),\n    dot(p, vec3(269.5, 183.3, 198.3)),\n    dot(p, vec3(169.5, 283.3, 156.9))\n  );\n  vec3 h = fract(sin(p) * 43758.5453123);\n  float phi = acos(2.0 * h.x - 1.0);\n  float theta = TAU * h.y;\n  return vec3(cos(theta) * sin(phi), sin(theta) * cos(phi), cos(phi));\n}\n\nfloat quinticSmooth(float t) {\n  float t2 = t * t;\n  float t3 = t * t2;\n  return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;\n}\n\nvec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {\n  return a + b * cos(TAU * (c * t + d));\n}\n\nfloat perlin3D(float amplitude, float frequency, float px, float py, float pz) {\n  float x = px * frequency;\n  float y = py * frequency;\n\n  float fx = floor(x); float fy = floor(y); float fz = floor(pz);\n  float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(pz);\n\n  vec3 g000 = gradientHash(vec3(fx, fy, fz));\n  vec3 g100 = gradientHash(vec3(cx, fy, fz));\n  vec3 g010 = gradientHash(vec3(fx, cy, fz));\n  vec3 g110 = gradientHash(vec3(cx, cy, fz));\n  vec3 g001 = gradientHash(vec3(fx, fy, cz));\n  vec3 g101 = gradientHash(vec3(cx, fy, cz));\n  vec3 g011 = gradientHash(vec3(fx, cy, cz));\n  vec3 g111 = gradientHash(vec3(cx, cy, cz));\n\n  float d000 = dot(g000, vec3(x - fx, y - fy, pz - fz));\n  float d100 = dot(g100, vec3(x - cx, y - fy, pz - fz));\n  float d010 = dot(g010, vec3(x - fx, y - cy, pz - fz));\n  float d110 = dot(g110, vec3(x - cx, y - cy, pz - fz));\n  float d001 = dot(g001, vec3(x - fx, y - fy, pz - cz));\n  float d101 = dot(g101, vec3(x - cx, y - fy, pz - cz));\n  float d011 = dot(g011, vec3(x - fx, y - cy, pz - cz));\n  float d111 = dot(g111, vec3(x - cx, y - cy, pz - cz));\n\n  float sx = quinticSmooth(x - fx);\n  float sy = quinticSmooth(y - fy);\n  float sz = quinticSmooth(pz - fz);\n\n  float lx00 = mix(d000, d100, sx);\n  float lx10 = mix(d010, d110, sx);\n  float lx01 = mix(d001, d101, sx);\n  float lx11 = mix(d011, d111, sx);\n\n  float ly0 = mix(lx00, lx10, sy);\n  float ly1 = mix(lx01, lx11, sy);\n\n  return amplitude * mix(ly0, ly1, sz);\n}\n\nfloat auroraGlow(float t, vec2 shift) {\n  vec2 uv = gl_FragCoord.xy / uResolution.y;\n  uv += shift;\n\n  float noiseVal = 0.0;\n  float freq = uNoiseFreq;\n  float amp = uNoiseAmp;\n  vec2 samplePos = uv * uScale;\n\n  for (float i = 0.0; i < 3.0; i += 1.0) {\n    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);\n    amp *= uOctaveDecay;\n    freq *= 2.0;\n  }\n\n  float yBand = uv.y * 10.0 - uBandHeight * 10.0;\n  return 0.3 * max(exp(uBandSpread * (1.0 - 1.1 * abs(noiseVal + yBand))), 0.0);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / uResolution.xy;\n  float t = uSpeed * 0.4 * uTime;\n\n  vec2 shift = vec2(0.0);\n  if (uEnableMouse) {\n    shift = (uMouse - 0.5) * uMouseInfluence;\n  }\n\n  vec3 col = vec3(0.0);\n  col += 0.99 * auroraGlow(t, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.2 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20)) * uColor1;\n  col += 0.99 * auroraGlow(t + uLayerOffset, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.1 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)) * uColor2;\n\n  col *= uBrightness;\n  float alpha = clamp(length(col), 0.0, 1.0);\n  gl_FragColor = vec4(col, alpha);\n}\n",
    uniforms: {
      uTime: {
        value: 0
      },
      uResolution: {
        value: [100, 100, 1]
      },
      uSpeed: {
        value: _0x4fec70
      },
      uScale: {
        value: _0x746174
      },
      uBrightness: {
        value: _0x1cad8c
      },
      uColor1: {
        value: t(_0x1b79e1)
      },
      uColor2: {
        value: t(_0x150e16)
      },
      uNoiseFreq: {
        value: _0x2d150f
      },
      uNoiseAmp: {
        value: _0x90f75f
      },
      uBandHeight: {
        value: _0x1f7ee9
      },
      uBandSpread: {
        value: _0x27ad26
      },
      uOctaveDecay: {
        value: _0x2813e5
      },
      uLayerOffset: {
        value: _0x4a4946
      },
      uColorSpeed: {
        value: _0x4ef937
      },
      uMouse: {
        value: new Float32Array([0.5, 0.5])
      },
      uMouseInfluence: {
        value: _0x3dfa21
      },
      uEnableMouse: {
        value: _0x4ea314
      }
    },
    onInit(_0x31f58c) {
      _0x5a51f4.current = _0x31f58c.canvas;
    },
    onResize(_0x49eb39, _0x52c585, _0x351c1e) {
      const _0x4552c1 = Math.min(window.devicePixelRatio, 2);
      _0x49eb39.uniforms.uResolution.value = [_0x52c585 * _0x4552c1, _0x351c1e * _0x4552c1, _0x52c585 * _0x4552c1 / (_0x351c1e * _0x4552c1)];
    },
    onFrame(_0x5b5095, _0x34f569) {
      _0x5b5095.uniforms.uTime.value = _0x34f569 * 0.001;
      if (_0x4ea314) {
        _0x24d819.current[0] += (_0x3e86c5.current[0] - _0x24d819.current[0]) * 0.05;
        _0x24d819.current[1] += (_0x3e86c5.current[1] - _0x24d819.current[1]) * 0.05;
        _0x5b5095.uniforms.uMouse.value[0] = _0x24d819.current[0];
        _0x5b5095.uniforms.uMouse.value[1] = _0x24d819.current[1];
      } else {
        _0x5b5095.uniforms.uMouse.value[0] = 0.5;
        _0x5b5095.uniforms.uMouse.value[1] = 0.5;
      }
    }
  });
  _0x1aace3.useEffect(() => {
    if (!_0x4ea314) {
      return;
    }
    function _0x464d13(_0x1e9289) {
      const _0x3659b4 = _0x5a51f4.current;
      if (!_0x3659b4) {
        return;
      }
      const _0x304cda = _0x3659b4.getBoundingClientRect();
      _0x3e86c5.current = [(_0x1e9289.clientX - _0x304cda.left) / _0x304cda.width, 1 - (_0x1e9289.clientY - _0x304cda.top) / _0x304cda.height];
    }
    function _0x21fb7b() {
      _0x3e86c5.current = [0.5, 0.5];
    }
    const _0x2da9d6 = setTimeout(() => {
      const _0x5061c2 = _0x5a51f4.current;
      if (_0x5061c2) {
        _0x5061c2.addEventListener("mousemove", _0x464d13);
        _0x5061c2.addEventListener("mouseleave", _0x21fb7b);
      }
    }, 0);
    return () => {
      clearTimeout(_0x2da9d6);
      const _0x3001cc = _0x5a51f4.current;
      if (_0x3001cc) {
        _0x3001cc.removeEventListener("mousemove", _0x464d13);
        _0x3001cc.removeEventListener("mouseleave", _0x21fb7b);
      }
    };
  }, [_0x4ea314]);
  _0x1aace3.useEffect(() => {
    _0x21df4e();
    return () => {
      _0x4e2d55.current?.();
    };
  }, [_0x21df4e, _0x4e2d55]);
  return _0x4e49f4.jsx("div", {
    ref: _0x4d88b3,
    className: "w-full h-full"
  });
}
export { u as default };