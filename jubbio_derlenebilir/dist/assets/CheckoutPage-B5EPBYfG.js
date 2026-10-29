import { v as _0x37ef86, d as _0x134e5f, b as _0x14e6a4, f as _0xde26da, j as _0x5ab741, B as _0x13f99a, J as _0xf6fe60, r as _0x16f2d6, I as _0x267ffc, aO as _0x35a4de } from "./index-cQfEKR1W.js";
import { C as _0x594ab1 } from "./CheckoutPlaceholder-Dr0TfmeQ.js";
import { I as _0x255d15, i as _0x1332b8 } from "./IyzicoCheckoutFrame-f1WDW5o8.js";
import _0x37c77d from "./FuelPackModal-Yv3-REPv.js";
import { L as _0xeaa9ad } from "./loader-circle-CTtxa1g9.js";
import "./subscription-Cl5JAGbQ.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./arrow-left-B3FhifN2.js";
function h() {
  const [_0x331172] = _0x37ef86();
  const _0x35ed0 = _0x134e5f();
  const {
    t: _0x2294e2
  } = _0x14e6a4();
  const _0x451a40 = _0xde26da(_0x201231 => _0x201231.user?.id);
  const _0x496972 = _0x331172.get("packSize");
  if (_0x331172.get("uid") && _0x331172.get("uid") !== String(_0x451a40)) {
    return _0x5ab741.jsxs("div", {
      className: "h-full flex flex-col items-center justify-center gap-4 p-6 text-text-primary",
      children: [_0x5ab741.jsx("p", {
        children: _0x2294e2("fuelCheckout.accountMismatch")
      }), _0x5ab741.jsx(_0x13f99a, {
        onClick: () => {
          _0xde26da.getState().logout();
        },
        children: _0x2294e2("fuelCheckout.signIn")
      })]
    });
  } else {
    return _0x5ab741.jsx(_0x37c77d, {
      open: true,
      onOpenChange: _0x34eaf1 => {
        if (!_0x34eaf1) {
          _0x35ed0("/app", {
            replace: true
          });
        }
      },
      initialPack: ["small", "medium", "large"].includes(_0x496972 ?? "") ? _0x496972 : "medium",
      initialPurchaseType: _0x331172.get("billing") === "monthly" ? "subscription" : "one-time"
    });
  }
}
function f() {
  const [_0x4d7080] = _0x37ef86();
  const {
    t: _0x11daff
  } = _0x14e6a4();
  const {
    user: _0x2a2f9d
  } = _0xde26da();
  const {
    fetchPlans: _0x3add57,
    plans: _0x40724e,
    fetchSubscriptionStatus: _0x481d61
  } = _0xf6fe60();
  const [_0x205494, _0x449999] = _0x16f2d6.useState("loading");
  const [_0x2b72da, _0x3d1500] = _0x16f2d6.useState(null);
  const [_0x271c3f, _0x28b2b5] = _0x16f2d6.useState(null);
  const [_0x4eac43, _0x40f6ac] = _0x16f2d6.useState();
  const _0x54703b = _0x16f2d6.useRef(false);
  const _0xd9087 = _0x16f2d6.useRef(null);
  const _0x579b50 = _0x4d7080.get("plan");
  const _0x3da78d = _0x4d7080.get("gift") === "1";
  const _0x211d8b = _0x4d7080.get("recipientId");
  const _0x4015b3 = _0x4d7080.get("recipientUsername");
  const _0x54a2b8 = _0x4d7080.get("uid");
  const _0x3b4e2a = _0x4d7080.get("uname");
  const _0x175f67 = _0x40724e.find(_0x57cd5c => _0x57cd5c.pricing.some(_0x5be400 => _0x5be400.backendId === Number(_0x579b50)));
  const _0x27cce0 = _0x175f67?.pricing.find(_0x273b64 => _0x273b64.backendId === Number(_0x579b50));
  _0x16f2d6.useEffect(() => {
    if (_0x2a2f9d && _0x54a2b8 && String(_0x2a2f9d.id) !== _0x54a2b8) {
      _0x449999("account-mismatch");
    }
  }, [_0x2a2f9d, _0x54a2b8]);
  _0x16f2d6.useEffect(() => {
    if (_0x205494 !== "account-mismatch") {
      _0x3add57();
    }
  }, [_0x3add57, _0x205494]);
  _0x16f2d6.useEffect(() => {
    if (_0x205494 !== "loading" || !_0x2a2f9d || _0x54a2b8 && String(_0x2a2f9d.id) !== _0x54a2b8) {
      return;
    }
    if (_0x54703b.current) {
      return;
    }
    if (_0x40724e.length === 0 || !_0x579b50) {
      return;
    }
    _0x54703b.current = true;
    (async () => {
      try {
        let _0x5a0972;
        if (!_0x3da78d) {
          if (!_0x175f67 || !_0x27cce0) {
            throw new Error(_0x11daff("subscription.checkout.planNotFound"));
          }
          await _0x481d61();
          _0x449999("review");
          return;
        }
        _0x5a0972 = await _0x35a4de({
          planId: Number(_0x579b50),
          ...(_0x211d8b ? {
            recipientUserId: Number(_0x211d8b)
          } : {}),
          ...(_0x4015b3 ? {
            recipientUsername: _0x4015b3
          } : {})
        });
        if (_0x5a0972.checkoutFormContent || _0x5a0972.paymentPageUrl) {
          _0x28b2b5(_0x5a0972.checkoutFormContent ?? "");
          _0x40f6ac(_0x5a0972.paymentPageUrl);
          _0x449999("checkout");
        } else {
          _0x449999("error");
          _0x3d1500(_0x11daff("subscription.checkout.paymentConfigMissing"));
        }
      } catch (_0x59c546) {
        _0x449999("error");
        const _0xadb7ad = _0x59c546?.response?.data?.code;
        const _0x376d87 = {
          ALREADY_SUBSCRIBED: _0x11daff("subscription.checkout.alreadySubscribed"),
          PLAN_NOT_FOUND: _0x11daff("subscription.checkout.planNotFound"),
          RECIPIENT_NOT_FOUND: _0x11daff("subscription.gift.recipientNotFound"),
          RECIPIENT_ALREADY_SUBSCRIBED: _0x11daff("subscription.gift.recipientAlreadySubscribed"),
          CANNOT_GIFT_SELF: _0x11daff("subscription.gift.cannotGiftSelf")
        };
        _0x3d1500(_0x376d87[_0xadb7ad] || _0x59c546?.response?.data?.message || _0x11daff("subscription.checkout.error"));
      }
    })();
  }, [_0x40724e, _0x579b50, _0x3da78d, _0x211d8b, _0x4015b3, _0x11daff, _0x205494, _0x2a2f9d, _0x54a2b8, _0x175f67, _0x27cce0, _0x481d61]);
  _0x16f2d6.useEffect(() => {
    const _0x1b14c8 = async _0x5decda => {
      if (_0x205494 !== "review" && _0x1332b8(_0x5decda, _0xd9087.current, "subscription") && (_0x5decda.data?.iyzicoResult === "success" || _0x5decda.data?.type === "iyzico-callback" && _0x5decda.data.status === "success")) {
        _0x449999("complete");
        await _0x481d61();
      }
    };
    window.addEventListener("message", _0x1b14c8);
    return () => window.removeEventListener("message", _0x1b14c8);
  }, [_0x481d61, _0x205494]);
  return _0x5ab741.jsx("div", {
    className: "min-h-screen bg-surface-base flex items-center justify-center p-4",
    children: _0x5ab741.jsxs("div", {
      className: "max-w-lg w-full text-center space-y-6",
      children: [_0x205494 === "review" && _0x175f67 && _0x27cce0 && _0x5ab741.jsx("div", {
        className: "text-left",
        children: _0x5ab741.jsx(_0x594ab1, {
          plan: _0x175f67,
          pricing: _0x27cce0,
          onBack: () => {
            window.location.href = "/app/nexus";
          },
          onComplete: () => _0x449999("complete")
        })
      }), _0x205494 === "account-mismatch" && _0x5ab741.jsxs(_0x5ab741.Fragment, {
        children: [_0x5ab741.jsx(_0x267ffc, {
          icon: "solar:danger-triangle-bold-duotone",
          className: "size-12 text-status-warning mx-auto"
        }), _0x5ab741.jsxs("div", {
          children: [_0x5ab741.jsx("h2", {
            className: "text-lg font-semibold text-text-primary mb-2",
            children: "Farklı Hesap Algılandı"
          }), _0x5ab741.jsxs("p", {
            className: "text-text-tertiary text-sm leading-relaxed",
            children: ["Masaüstü uygulamasında ", _0x5ab741.jsx("span", {
              className: "text-text-secondary font-medium",
              children: _0x3b4e2a || _0x54a2b8
            }), " hesabıyla oturum açıkken, bu tarayıcıda ", _0x5ab741.jsx("span", {
              className: "text-text-secondary font-medium",
              children: _0x2a2f9d?.username
            }), " hesabıyla giriş yapılmış. Ödemenin doğru hesaba işlenmesi için lütfen ", _0x5ab741.jsx("span", {
              className: "text-text-secondary font-medium",
              children: _0x3b4e2a || _0x54a2b8
            }), " hesabıyla giriş yapın."]
          })]
        }), _0x5ab741.jsx("div", {
          className: "flex gap-3 justify-center",
          children: _0x5ab741.jsxs(_0x13f99a, {
            onClick: () => _0xde26da.getState().logout(),
            className: "bg-accent-primary text-surface-base hover:bg-accent-primary/90",
            children: [_0x3b4e2a || _0x54a2b8, " olarak giriş yap"]
          })
        })]
      }), _0x205494 === "loading" && _0x5ab741.jsxs(_0x5ab741.Fragment, {
        children: [_0x5ab741.jsx(_0xeaa9ad, {
          className: "size-10 animate-spin text-accent-primary mx-auto"
        }), _0x5ab741.jsx("p", {
          className: "text-text-secondary text-sm",
          children: _0x11daff("subscription.checkout.preparing")
        })]
      }), _0x205494 === "checkout" && (_0x271c3f || _0x4eac43) && _0x5ab741.jsx("div", {
        className: "w-full",
        children: _0x5ab741.jsx(_0x255d15, {
          frameRef: _0xd9087,
          checkoutFormContent: _0x271c3f ?? "",
          paymentPageUrl: _0x4eac43,
          className: "w-full min-h-[500px] border-0 rounded-lg",
          title: "iyzico Checkout"
        })
      }), _0x205494 === "complete" && _0x5ab741.jsxs(_0x5ab741.Fragment, {
        children: [_0x5ab741.jsx(_0x267ffc, {
          icon: "solar:verified-check-bold",
          className: "size-14 text-accent-primary mx-auto"
        }), _0x5ab741.jsxs("div", {
          children: [_0x5ab741.jsx("h2", {
            className: "text-lg font-semibold text-text-primary mb-2",
            children: _0x11daff("subscription.checkout.success")
          }), _0x5ab741.jsx("p", {
            className: "text-text-tertiary text-sm",
            children: _0x11daff("subscription.checkout.successDesc")
          })]
        }), _0x5ab741.jsxs("div", {
          className: "flex flex-col gap-3",
          children: [_0x5ab741.jsx("button", {
            onClick: () => {
              window.location.href = "jubbio://checkout/success";
            },
            className: "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-accent-primary text-surface-base hover:bg-accent-primary/90 transition-colors cursor-pointer",
            children: _0x11daff("subscription.checkout.openApp")
          }), _0x5ab741.jsx("p", {
            className: "text-[11px] text-text-muted",
            children: _0x11daff("subscription.checkout.canCloseTab")
          })]
        })]
      }), _0x205494 === "error" && _0x5ab741.jsxs(_0x5ab741.Fragment, {
        children: [_0x5ab741.jsx(_0x267ffc, {
          icon: "solar:close-circle-bold-duotone",
          className: "size-12 text-status-danger mx-auto"
        }), _0x5ab741.jsxs("div", {
          children: [_0x5ab741.jsx("h2", {
            className: "text-lg font-semibold text-text-primary mb-2",
            children: _0x11daff("subscription.checkout.errorTitle")
          }), _0x5ab741.jsx("p", {
            className: "text-text-tertiary text-sm",
            children: _0x2b72da
          })]
        }), _0x5ab741.jsxs("div", {
          className: "flex gap-3 justify-center",
          children: [_0x5ab741.jsx(_0x13f99a, {
            onClick: () => {
              _0x54703b.current = false;
              _0x449999("loading");
              _0x3d1500(null);
            },
            variant: "outline",
            className: "border-border-default text-text-secondary hover:bg-surface-overlay",
            children: _0x11daff("common.retry")
          }), _0x5ab741.jsx(_0x13f99a, {
            onClick: () => {
              window.location.href = "jubbio://focus";
            },
            className: "bg-accent-primary text-surface-base hover:bg-accent-primary/90",
            children: _0x11daff("subscription.checkout.openApp")
          })]
        })]
      })]
    })
  });
}
function g() {
  const [_0x1e3c9f] = _0x37ef86();
  if (_0x1e3c9f.get("type") === "fuel") {
    return _0x5ab741.jsx(h, {});
  } else {
    return _0x5ab741.jsx(f, {});
  }
}
export { g as default };