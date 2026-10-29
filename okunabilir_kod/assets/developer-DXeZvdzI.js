const e = {
  bot: {
    label: "Bot Ayarları",
    icon: "🤖",
    description: "Bot'u sunucuya eklemek için gerekli ayarlar",
    scopes: [{
      id: "bot",
      label: "bot",
      description: "Bot'u seçilen sunucuya ekler",
      requiresGuild: true,
      requiresRedirect: false,
      useCase: "Bot'unuzu kullanıcıların sunucularına eklemek için"
    }, {
      id: "applications.commands",
      label: "applications.commands",
      description: "Slash komutlarını kaydetme ve kullanma",
      useCase: "Bot'unuzun slash komutlarını kullanması için"
    }, {
      id: "applications.commands.permissions.update",
      label: "applications.commands.permissions.update",
      description: "Komut izinlerini güncelleme",
      warning: "Bot scope'u olmadan kullanılamaz"
    }]
  },
  user: {
    label: "Kullanıcı Bilgileri",
    icon: "👤",
    description: "Kullanıcı hesap bilgilerine erişim",
    scopes: [{
      id: "identify",
      label: "identify",
      description: "Kullanıcı adı, avatar ve ID bilgilerine erişim",
      requiresRedirect: true,
      useCase: "Web sitenizde \"Jubbio ile Giriş\" için"
    }, {
      id: "email",
      label: "email",
      description: "E-posta adresini okuma",
      requiresRedirect: true,
      useCase: "Kullanıcı kaydı ve iletişim için"
    }, {
      id: "connections",
      label: "connections",
      description: "Bağlı hesapları okuma (Spotify, Steam vb.)",
      requiresRedirect: true
    }, {
      id: "openid",
      label: "openid",
      description: "OpenID Connect kimlik doğrulama",
      requiresRedirect: true
    }]
  },
  guilds: {
    label: "Sunucu Erişimi",
    icon: "🏠",
    description: "Kullanıcının sunucularına erişim",
    scopes: [{
      id: "guilds",
      label: "guilds",
      description: "Kullanıcının üye olduğu sunucuları listeleme",
      requiresRedirect: true,
      useCase: "Dashboard'da sunucu seçimi için"
    }, {
      id: "guilds.join",
      label: "guilds.join",
      description: "Kullanıcıyı otomatik olarak sunucuya ekleme",
      requiresRedirect: true,
      warning: "⚠️ Dikkatli kullanın - spam olarak algılanabilir"
    }, {
      id: "guilds.members.read",
      label: "guilds.members.read",
      description: "Sunucu üyelerini okuma",
      requiresRedirect: true
    }, {
      id: "guilds.channels.read",
      label: "guilds.channels.read",
      description: "Sunucu kanallarını okuma",
      requiresRedirect: true
    }]
  },
  webhook: {
    label: "Webhook",
    icon: "🔗",
    scopes: [{
      id: "webhook.incoming",
      label: "webhook.incoming",
      description: "Webhook oluşturma ve yönetme",
      requiresRedirect: true,
      useCase: "Otomatik mesaj gönderimi için"
    }]
  },
  messages: {
    label: "Mesajlar",
    icon: "💬",
    description: "Mesaj okuma/yazma (Sadece OAuth2)",
    scopes: [{
      id: "messages.read",
      label: "messages.read",
      description: "Mesajları oku",
      requiresRedirect: true
    }]
  },
  dm: {
    label: "Direkt Mesajlar",
    icon: "✉️",
    description: "DM erişimi (Sadece OAuth2)",
    scopes: [{
      id: "dm_channels.read",
      label: "dm_channels.read",
      description: "DM kanallarını oku",
      requiresRedirect: true
    }, {
      id: "dm_channels.messages.read",
      label: "dm_channels.messages.read",
      description: "DM mesajlarını oku",
      requiresRedirect: true
    }, {
      id: "dm_channels.messages.write",
      label: "dm_channels.messages.write",
      description: "DM mesajı gönder",
      requiresRedirect: true
    }, {
      id: "gdm.join",
      label: "gdm.join",
      description: "Kullanıcıyı grup DM'e ekle",
      requiresRedirect: true
    }]
  },
  voice: {
    label: "Ses",
    icon: "🎤",
    description: "Ses kanalı erişimi (Sadece OAuth2)",
    scopes: [{
      id: "voice",
      label: "voice",
      description: "Ses kanallarına bağlan",
      requiresRedirect: true
    }, {
      id: "gateway.connect",
      label: "gateway.connect",
      description: "Gateway'e bağlan",
      requiresRedirect: true
    }]
  },
  relationships: {
    label: "İlişkiler",
    icon: "👥",
    description: "Arkadaş listesi erişimi (Sadece OAuth2)",
    scopes: [{
      id: "relationships.read",
      label: "relationships.read",
      description: "Arkadaş listesini oku",
      requiresRedirect: true
    }, {
      id: "relationships.write",
      label: "relationships.write",
      description: "Arkadaş listesini değiştir",
      requiresRedirect: true
    }]
  },
  presence: {
    label: "Durum",
    icon: "🟢",
    description: "Kullanıcı durumu (Sadece OAuth2)",
    scopes: [{
      id: "presences.read",
      label: "presences.read",
      description: "Kullanıcı durumlarını oku",
      requiresRedirect: true
    }, {
      id: "presences.write",
      label: "presences.write",
      description: "Kullanıcı durumunu değiştir",
      requiresRedirect: true
    }]
  },
  account: {
    label: "Hesap",
    icon: "⚙️",
    description: "Hesap ayarları (Sadece OAuth2)",
    scopes: [{
      id: "account.global_name.update",
      label: "account.global_name.update",
      description: "Global display name güncelle",
      requiresRedirect: true
    }]
  },
  activities: {
    label: "Aktiviteler",
    icon: "🎮",
    description: "Rich Presence (Sadece OAuth2)",
    scopes: [{
      id: "activities.read",
      label: "activities.read",
      description: "Aktiviteleri oku",
      requiresRedirect: true
    }, {
      id: "activities.write",
      label: "activities.write",
      description: "Aktiviteleri yaz",
      requiresRedirect: true
    }, {
      id: "activities.invites.write",
      label: "activities.invites.write",
      description: "Aktivite davetleri oluştur",
      requiresRedirect: true
    }]
  },
  rpc: {
    label: "RPC",
    icon: "🖥️",
    description: "Desktop client RPC (Sadece OAuth2)",
    scopes: [{
      id: "rpc",
      label: "rpc",
      description: "Rich Presence ve RPC",
      requiresRedirect: true
    }, {
      id: "rpc.notifications.read",
      label: "rpc.notifications.read",
      description: "RPC bildirimlerini oku",
      requiresRedirect: true
    }, {
      id: "rpc.voice.read",
      label: "rpc.voice.read",
      description: "RPC ses durumunu oku",
      requiresRedirect: true
    }, {
      id: "rpc.voice.write",
      label: "rpc.voice.write",
      description: "RPC ses durumunu değiştir",
      requiresRedirect: true
    }, {
      id: "rpc.activities.write",
      label: "rpc.activities.write",
      description: "RPC aktivitelerini değiştir",
      requiresRedirect: true
    }]
  }
};
const i = Object.values(e).flatMap(_0x458a70 => _0x458a70.scopes);
const a = [{
  id: "administrator",
  label: "Yönetici",
  value: 8
}, {
  id: "manage_guild",
  label: "Sunucuyu Yönet",
  value: 32
}, {
  id: "manage_roles",
  label: "Rolleri Yönet",
  value: 268435456
}, {
  id: "manage_channels",
  label: "Kanalları Yönet",
  value: 16
}, {
  id: "kick_members",
  label: "Üyeleri At",
  value: 2
}, {
  id: "ban_members",
  label: "Üyeleri Yasakla",
  value: 4
}, {
  id: "manage_messages",
  label: "Mesajları Yönet",
  value: 8192
}, {
  id: "read_messages",
  label: "Mesajları Oku",
  value: 1024
}, {
  id: "send_messages",
  label: "Mesaj Gönder",
  value: 2048
}, {
  id: "embed_links",
  label: "Link Göm",
  value: 16384
}, {
  id: "attach_files",
  label: "Dosya Ekle",
  value: 32768
}, {
  id: "add_reactions",
  label: "Tepki Ekle",
  value: 64
}, {
  id: "use_slash_commands",
  label: "Slash Komutları",
  value: 2147483648
}, {
  id: "connect",
  label: "Bağlan (Ses)",
  value: 1048576
}, {
  id: "speak",
  label: "Konuş (Ses)",
  value: 2097152
}];
const s = ["messages.read", "dm_channels.read", "dm_channels.messages.read", "dm_channels.messages.write", "gdm.join", "voice", "gateway.connect", "relationships.read", "relationships.write", "presences.read", "presences.write", "account.global_name.update", "activities.read", "activities.write", "activities.invites.write", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.activities.write"];
export { s as B, e as O, a, i as b };