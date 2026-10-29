import { b as _0x43728a, j as _0x3ce026 } from "./index-cQfEKR1W.js";
import { H as _0x260788, P as _0x134775, a as _0x28e6c4, C as _0x3f4a01, D as _0x66e46b, i as _0x1d6f5f, c as _0x48d6b6, d as _0x1af65a, e as _0x43b7fe, f as _0x20bf3d, g as _0x57defb, h as _0x5bb2e6, I as _0x162bc0 } from "./DocComponents-BWAUshvB.js";
import { C as _0x1c715b } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function g() {
  const {
    t: _0xd2befa
  } = _0x43728a("docs");
  return _0x3ce026.jsxs(_0x3ce026.Fragment, {
    children: [_0x3ce026.jsx(_0x260788, {
      children: _0xd2befa("permissions.izinlerPermissions")
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.bitfieldTabanliIzinSistemi", {
        className: "PermissionsBitField"
      })
    }), _0x3ce026.jsx(_0x28e6c4, {
      id: "permission-check",
      children: _0xd2befa("permissions.izinKontrolu")
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.uyeIzinleriniKontrolEtmenin")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "// Tek izin kontrolü\nmember.permissions.has('ManageMessages');\nmember.permissions.has(PermissionFlagsBits.BanMembers);\n\n// Birden fazla izin — hepsine sahip mi\nmember.permissions.has(['ManageMessages', 'KickMembers']);\n\n// En az birine sahip mi\nmember.permissions.any(['ManageMessages', 'KickMembers']);\n\n// Eksik izinleri bul\nconst missing = member.permissions.missing(['ManageMessages', 'KickMembers', 'BanMembers']);\n// ['KickMembers', 'BanMembers'] — sahip olunmayanlar\n\n// Tüm izinleri dizi olarak al\nmember.permissions.toArray();\n// ['SendMessages', 'ViewChannel', 'ManageMessages', ...]\n\n// Ham izin bitleri\nmember.permissions.bitfield; // BigInt"
    }), _0x3ce026.jsx(_0x3f4a01, {
      type: "info",
      title: _0xd2befa("permissions.adminBypassTitle"),
      children: _0xd2befa("permissions.adminBypassDesc", {
        admin: "Administrator",
        true: "true",
        checkAdmin: "checkAdmin",
        false: "false"
      })
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "permissions-bitfield",
      children: "PermissionsBitField"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.izinBitleriniYonetenSinif")
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "constructor",
      children: "Constructor"
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "import { PermissionsBitField, PermissionFlagsBits } from '@jubbio/core';\n\n// BigInt'ten\nconst perms = new PermissionsBitField(8n);\n\n// String'ten (tek izin)\nconst perms = new PermissionsBitField('Administrator');\n\n// String dizisinden\nconst perms = new PermissionsBitField(['SendMessages', 'ViewChannel']);\n\n// BigInt dizisinden\nconst perms = new PermissionsBitField([1n << 11n, 1n << 10n]);\n\n// Başka bir PermissionsBitField'dan\nconst perms = new PermissionsBitField(otherPerms);\n\n// Boş (varsayılan 0n)\nconst perms = new PermissionsBitField();"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "bitfield-methods",
      children: "Methods"
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thMethod")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thdonus")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "has(permission, checkAdmin?)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "boolean"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdHasTumIzinlere", {
              checkAdmin: "checkAdmin=false"
            })
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "any(permissions, checkAdmin?)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "boolean"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdAnyEnAzBirine")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "missing(permissions, checkAdmin?)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionString[]"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdeksikIzinleriDiziOlarak")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "add(...permissions)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "this"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdizinEklerChainable")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "remove(...permissions)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "this"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdizinKaldirirChainable")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "toArray()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionString[]"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdizinAdlariniDiziOlarak")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "equals(other)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "boolean"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdikiIzinSetiniKarsilastirir")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "clone()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionsBitField"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdayniBitlerleYeniInstance")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "freeze()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "this"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdbitfieldiDondururImmutableDegisiklik")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "toJSON()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "string"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdbigintiStringeCevirirJson")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "toString()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "string"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdbigintiStringeCevirir")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "has-any",
      children: _0xd2befa("permissions.hasVeAnyTitle")
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.hasVeAnyDesc", {
        has: "has()",
        any: "any()"
      })
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "// has — tüm izinlere sahip mi\nperms.has('ManageMessages');                          // true/false\nperms.has(['ManageMessages', 'KickMembers']);          // İkisine de sahip mi\nperms.has(PermissionFlagsBits.BanMembers);\n\n// Admin bypass'ını devre dışı bırak\nperms.has('ManageMessages', false); // Gerçekten ManageMessages var mı\n\n// any — en az birine sahip mi\nperms.any('ManageMessages');                          // true/false\nperms.any(['ManageMessages', 'KickMembers']);          // Herhangi biri varsa true\nperms.any(['ManageMessages', 'KickMembers'], false);   // Admin bypass devre dışı"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "missing-method",
      children: "missing()"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.eksikIzinleriDiziOlarak")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "const missing = perms.missing(['ManageMessages', 'KickMembers', 'BanMembers']);\n// ['KickMembers', 'BanMembers'] — sahip olunmayan izinler\n\n// Admin bypass devre dışı\nconst missing = perms.missing(['Administrator', 'ManageGuild'], false);"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "add-remove",
      children: _0xd2befa("permissions.addVeRemoveTitle")
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.izinEklemeVeKaldirma")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "// Çoklu ekleme\nperms.add('ManageMessages', 'KickMembers', PermissionFlagsBits.BanMembers);\n\n// Chainable\nperms.add('ManageMessages').add('KickMembers').remove('SendMessages');\n\n// Çoklu kaldırma\nperms.remove('ManageMessages', 'KickMembers');"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "utility-methods",
      children: _0xd2befa("permissions.yardimciMethods")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "// Karşılaştır\nconst perms1 = new PermissionsBitField(['SendMessages', 'ViewChannel']);\nconst perms2 = new PermissionsBitField(['SendMessages', 'ViewChannel']);\nperms1.equals(perms2); // true\n\n// Klonla\nconst copy = perms.clone();\ncopy.add('ManageMessages'); // Orijinali etkilemez\n\n// Dondur (immutable)\nconst frozen = perms.freeze();\nfrozen.add('ManageMessages'); // TypeError fırlatır\n\n// Serileştir\nperms.toJSON();    // '2048' (string)\nperms.toString();  // '2048' (string)\nperms.bitfield;    // 2048n (BigInt)"
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "static-properties",
      children: _0xd2befa("permissions.statikPropertylerVeMethodsTitle")
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.statikPropertylerVeMethodsDesc", {
        className: "PermissionsBitField"
      })
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "static-props",
      children: _0xd2befa("permissions.statikPropertylerTitle")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thProperty")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thTip")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama_")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionsBitField.Flags"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "Record<string, bigint>"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdtumIzinFlagleriPermissionflagsbits")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionsBitField.All"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "bigint"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdtumIzinlerinBirlesimi")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PermissionsBitField.Default"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "bigint"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdvarsayilanIzinDegeri0n")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "resolve-method",
      children: "resolve()"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.resolveDesc", {
        type: "PermissionResolvable"
      })
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "PermissionsBitField.resolve('ManageMessages');                    // 8192n\nPermissionsBitField.resolve(8192n);                               // 8192n\nPermissionsBitField.resolve(['SendMessages', 'ViewChannel']);      // 3072n\nPermissionsBitField.resolve(somePermsBitField);                   // bitfield değeri\n\n// Geçersiz isim verilirse hata fırlatır\nPermissionsBitField.resolve('FakePermission');\n// Error: Unknown permission: FakePermission"
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "permission-resolvable",
      children: "PermissionResolvable"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.tumIzinMethodlarindaHas")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "typescript",
      code: "type PermissionResolvable =\n  | bigint                   // Doğrudan bit değeri: 8n\n  | bigint[]                 // Bit dizisi: [8n, 16n]\n  | PermissionString         // İsim: 'ManageMessages'\n  | PermissionString[]       // İsim dizisi: ['ManageMessages', 'KickMembers']\n  | PermissionsBitField;     // Başka bir PermissionsBitField instance'ı"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "permission-string",
      children: "PermissionString"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.permissionStringDesc", {
        type: "PermissionFlagsBits"
      })
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "typescript",
      code: "type PermissionString =\n  | 'CreateInstantInvite' | 'KickMembers' | 'BanMembers'\n  | 'Administrator' | 'ManageChannels' | 'ManageGuild'\n  | 'SendMessages' | 'ManageMessages' | 'ViewChannel'\n  | ... ; // Tüm PermissionFlagsBits key'leri"
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "permission-flags",
      children: "PermissionFlagsBits"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.tumIzinFlagleriHer")
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "flags-general",
      children: _0xd2befa("permissions.flagsGenelTitle")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thFlag")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thBit")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama__")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "CreateInstantInvite"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 0n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tddavetOlustur")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "KickMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 1n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyeleriAt")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "BanMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 2n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyeleriYasakla")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "Administrator"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 3n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdtamYoneticiErisimi")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageChannels"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 4n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdkanallariYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageGuild"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 5n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsunucuyuYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "AddReactions"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 6n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdTepkiEkle")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ViewAuditLog"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 7n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tddenetimKaydiniGoruntule")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ViewGuildInsights"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 8n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsunucuIstatistikleriniGoruntule")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "Stream"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 9n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesKanalindaYayinYap")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ViewChannel"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 10n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdkanallariGoruntule")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "flags-messages",
      children: _0xd2befa("permissions.flagsMesajlarTitle")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thFlag")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thBit")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama___")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "SendMessages"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 11n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdmesajGonder")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "SendTTSMessages"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 12n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdttsMesajGonder")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageMessages"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 13n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdmesajlariSilsabitle")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "EmbedLinks"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 14n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdLinkEmbedLe")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "AttachFiles"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 15n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdDosyaEkle")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ReadMessageHistory"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 16n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdmesajGecmisiniOku")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "UseExternalEmojis"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 17n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdHariciEmojilerKullan")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "UseSlashCommands"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 18n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdslashKomutlariKullan")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "MentionEveryone"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 19n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdEveryoneHereKullan")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "flags-voice",
      children: _0xd2befa("permissions.flagsSesTitle")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thFlag")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thBit")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama____")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "Connect"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 20n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesKanalinaBaglan")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "Speak"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 21n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesKanalindaKonus")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "MuteMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 22n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdbaskalariniSessizeAl")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "DeafenMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 23n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdbaskalariniSagirYap")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "MoveMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 24n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyeleriTasi")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "UseVAD"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 25n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesAktiviteAlgilamaKullan")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ChangeCodec"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 26n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesCodeciniDegistir")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "AudioQualityAdmin"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 27n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdsesKalitesiYonetimi")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "flags-video",
      children: _0xd2befa("permissions.videoVeEkranPaylasimi")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thFlag")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thBit")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama_____")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "VideoCall"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 28n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdgoruntuluArama")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ShareScreen"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 29n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdekranPaylas")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ShareCamera"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 30n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdkameraPaylas")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ControlQuality"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 31n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdKaliteKontrol")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "RequestToSpeak"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 32n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdkonusmaIzniIsteStage")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageEvents"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 33n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdetkinlikleriYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "AddMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 34n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyeEkle")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "RemoveMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 35n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyeCikar")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ChangeGroupIcon"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 36n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdgrupIkonuDegistir")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ChangeDMSettings"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 37n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tddmAyarlariniDegistir")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "flags-advanced",
      children: _0xd2befa("permissions.gelismis")
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thFlag")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thBit")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama______")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageGroup"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 38n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdgrubuYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "UseActivities"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 39n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdAktiviteleriKullan")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ModerateMembers"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 40n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tduyelereTimeoutUygula")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageRoles"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 41n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdrolleriYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "ManageEmojis"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 42n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdemojileriYonet")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "PrioritySpeaker"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "1n << 43n"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdoncelikliKonusmaci")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "permissions-class",
      children: "Permissions"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.permissionsClassDesc", {
        className: "Permissions",
        memberPermissions: "GuildMember.permissions"
      })
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "permissions-constructor",
      children: "Constructor"
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "import { Permissions, PermissionFlags } from '@jubbio/core';\n\n// Bitfield string'den\nconst perms = new Permissions('8');\n\n// BigInt'ten\nconst perms = new Permissions(8n);\n\n// Boş (varsayılan 0n)\nconst perms = new Permissions();"
    }), _0x3ce026.jsx(_0x1d6f5f, {
      id: "permissions-methods",
      children: "Methods"
    }), _0x3ce026.jsxs(_0x48d6b6, {
      children: [_0x3ce026.jsx(_0x1af65a, {
        children: _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("th.thMethod")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thdonus")
          }), _0x3ce026.jsx(_0x20bf3d, {
            children: _0xd2befa("permissions.thaciklama")
          })]
        })
      }), _0x3ce026.jsxs(_0x57defb, {
        children: [_0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "has(permission)"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "boolean"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdPermissionsHas")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "toArray()"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "string[]"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdPermissionsToArray")
          })]
        }), _0x3ce026.jsxs(_0x43b7fe, {
          children: [_0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "bits"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0x3ce026.jsx(_0x162bc0, {
              children: "bigint"
            })
          }), _0x3ce026.jsx(_0x5bb2e6, {
            children: _0xd2befa("permissions.tdPermissionsBits")
          })]
        })]
      })]
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "const perms = new Permissions('8');\n\nperms.has('Administrator');    // true\nperms.has('ManageMessages');   // false\nperms.toArray();               // ['Administrator']\nperms.bits;                    // 8n (BigInt raw değer)"
    }), _0x3ce026.jsx(_0x3f4a01, {
      type: "info",
      title: "Permissions vs PermissionsBitField",
      children: _0xd2befa("permissions.permissionsVsBitFieldInfo", {
        permissions: "Permissions",
        bitField: "PermissionsBitField",
        member: "GuildMember.permissions"
      })
    }), _0x3ce026.jsx(_0x66e46b, {}), _0x3ce026.jsx(_0x28e6c4, {
      id: "permission-flags-export",
      children: "PermissionFlags"
    }), _0x3ce026.jsx(_0x134775, {
      children: _0xd2befa("permissions.permissionFlagsDesc")
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "import { PermissionFlags } from '@jubbio/core';\n\nPermissionFlags.Administrator    // 1n << 3n\nPermissionFlags.ManageChannels   // 1n << 4n\nPermissionFlags.ManageGuild      // 1n << 5n\nPermissionFlags.SendMessages     // 1n << 11n\nPermissionFlags.ManageMessages   // 1n << 13n\nPermissionFlags.Connect          // 1n << 20n\nPermissionFlags.Speak            // 1n << 21n\nPermissionFlags.ManageRoles      // 1n << 41n\n// ... tüm PermissionFlagsBits key'leri ile aynı"
    }), _0x3ce026.jsx(_0x1c715b, {
      language: "javascript",
      code: "// Permissions sınıfı ile birlikte kullanım\nconst perms = new Permissions('8');\nperms.has(PermissionFlags.Administrator); // BigInt ile kontrol\n\n// GuildMember üzerinde kullanım\nmember.permissions.has('Administrator');              // String key (önerilen)\nmember.permissions.has(PermissionFlags.BanMembers);   // BigInt ile kontrol"
    })]
  });
}
export { g as default };