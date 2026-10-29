import { r as _0x22e768, j as _0x5b7a0d } from "./index-cQfEKR1W.js";
import { C as _0x316b4c, a as _0x51d5c4, u as _0x468e2c, b as _0x55c88 } from "./react-three-fiber.esm-m4S1SNob.js";
import "./with-selector-DzPX4d1H.js";
const a = _0x5cf93d => {
  const _0x2d4402 = _0x5cf93d.replace("#", "");
  return [parseInt(_0x2d4402.slice(0, 2), 16) / 255, parseInt(_0x2d4402.slice(2, 4), 16) / 255, parseInt(_0x2d4402.slice(4, 6), 16) / 255];
};
const _Component = _0x22e768.forwardRef(function ({
  uniforms: _0x3c02e2
}, _0x437d52) {
  const {
    viewport: _0x379aa6
  } = _0x468e2c();
  _0x22e768.useLayoutEffect(() => {
    const _0x21c7f2 = _0x437d52;
    if (_0x21c7f2.current) {
      _0x21c7f2.current.scale.set(_0x379aa6.width, _0x379aa6.height, 1);
    }
  }, [_0x437d52, _0x379aa6]);
  _0x55c88((_0x240ecd, _0x1e35d) => {
    const _0x383138 = _0x437d52;
    if (_0x383138.current) {
      _0x383138.current.material.uniforms.uTime.value += _0x1e35d * 0.1;
    }
  });
  return <mesh ref={_0x437d52}><planeGeometry args={[1, 1, 1, 1]} /><shaderMaterial uniforms={_0x3c02e2} vertexShader="\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main() {\n  vPosition = position;\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n" fragmentShader="\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nuniform float uTime;\nuniform vec3  uColor;\nuniform float uSpeed;\nuniform float uScale;\nuniform float uRotation;\nuniform float uNoiseIntensity;\n\nconst float e = 2.71828182845904523536;\n\nfloat noise(vec2 texCoord) {\n  float G = e;\n  vec2  r = (G * sin(G * texCoord));\n  return fract(r.x * r.y * (1.0 + texCoord.x));\n}\n\nvec2 rotateUvs(vec2 uv, float angle) {\n  float c = cos(angle);\n  float s = sin(angle);\n  mat2  rot = mat2(c, -s, s, c);\n  return rot * uv;\n}\n\nvoid main() {\n  float rnd        = noise(gl_FragCoord.xy);\n  vec2  uv         = rotateUvs(vUv * uScale, uRotation);\n  vec2  tex        = uv * uScale;\n  float tOffset    = uSpeed * uTime;\n\n  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);\n\n  float pattern = 0.6 +\n                  0.4 * sin(5.0 * (tex.x + tex.y +\n                                   cos(3.0 * tex.x + 5.0 * tex.y) +\n                                   0.02 * tOffset) +\n                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));\n\n  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;\n  col.a = 1.0;\n  gl_FragColor = col;\n}\n" /></mesh>;
});
_Component.displayName = "SilkPlane";
const l = ({
  speed: _0x13ee1a = 5,
  scale: _0x2b809a = 1,
  color: _0x36ec39 = "#7B7481",
  noiseIntensity: _0x1698ca = 1.5,
  rotation: _0x36f5ab = 0
}) => {
  const _0xc6c489 = _0x22e768.useRef(null);
  const _0x18d3e5 = _0x22e768.useRef(null);
  const [_0x407631, _0x2b6b09] = _0x22e768.useState(true);
  const [_0x3079fc, _0x2cc0b7] = _0x22e768.useState(false);
  const [_0x3403a4, _0x249dba] = _0x22e768.useState(0);
  _0x22e768.useEffect(() => {
    const _0x4cda7c = _0x18d3e5.current;
    if (!_0x4cda7c) {
      return;
    }
    const _0x52e1f7 = new IntersectionObserver(([_0x2ec399]) => _0x2b6b09(_0x2ec399.isIntersecting), {
      threshold: 0
    });
    _0x52e1f7.observe(_0x4cda7c);
    return () => _0x52e1f7.disconnect();
  }, []);
  const _0x4805e4 = _0x22e768.useCallback(() => {
    _0x2cc0b7(true);
    setTimeout(() => {
      _0x249dba(_0x3e7313 => _0x3e7313 + 1);
      _0x2cc0b7(false);
    }, 1500);
  }, []);
  const _0x446dd1 = _0x22e768.useCallback(_0x5f8358 => {
    const _0x522c04 = _0x5f8358.gl.domElement;
    const _0x3bb764 = _0x3c56fb => {
      _0x3c56fb.preventDefault();
      _0x4805e4();
    };
    _0x522c04.addEventListener("webglcontextlost", _0x3bb764);
    _0x522c04.__cleanupContextLost = () => {
      _0x522c04.removeEventListener("webglcontextlost", _0x3bb764);
    };
  }, [_0x4805e4]);
  _0x22e768.useEffect(() => () => {
    const _0x17189c = _0x18d3e5.current;
    if (!_0x17189c) {
      return;
    }
    const _0x3efd2f = _0x17189c.querySelector("canvas");
    if (_0x3efd2f) {
      _0x3efd2f.__cleanupContextLost?.();
    }
  }, [_0x3403a4]);
  const _0x463e9d = _0x22e768.useMemo(() => ({
    uSpeed: {
      value: _0x13ee1a
    },
    uScale: {
      value: _0x2b809a
    },
    uNoiseIntensity: {
      value: _0x1698ca
    },
    uColor: {
      value: new _0x316b4c(...a(_0x36ec39))
    },
    uRotation: {
      value: _0x36f5ab
    },
    uTime: {
      value: 0
    }
  }), [_0x13ee1a, _0x2b809a, _0x1698ca, _0x36ec39, _0x36f5ab]);
  const _0x4281e1 = _0x407631 && !_0x3079fc ? "always" : "never";
  return <div ref={_0x18d3e5} className="w-full h-full">{!_0x3079fc && <_0x51d5c4 dpr={[1, 2]} frameloop={_0x4281e1} onCreated={_0x446dd1} gl={{
      powerPreference: "default",
      failIfMajorPerformanceCaveat: false
    }} key={_0x3403a4}><_Component ref={_0xc6c489} uniforms={_0x463e9d} /></_0x51d5c4>}</div>;
};
export { l as default };