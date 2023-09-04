//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 116                                                             *
 * url: https://github.com/nvt194/Betterfox                                 *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);
user_pref("browser.startup.preXulSkeletonUI", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);

/** GFX ***/
//user_pref("gfx.webrender.precache-shaders", true); // optional
//user_pref("gfx.canvas.accelerated", true); // enable if using a dedicated GPU on WINDOWS
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** BROWSER CACHE ***/
//user_pref("browser.cache.disk.enable", true); // DEFAULT
//user_pref("browser.cache.disk.smart_size.enabled", false);
//user_pref("browser.cache.disk.capacity", 8192000);
//user_pref("browser.cache.disk.metadata_memory_limit", 10000);
user_pref("browser.cache.memory.capacity", 1048576);
user_pref("browser.cache.memory.max_entry_size", 65536);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 196608);
user_pref("media.memory_caches_combined_limit_kb", 1572864);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.websocket.max-connections", 400);
user_pref("network.http.pacing.requests.min-parallelism", 12);
user_pref("network.http.pacing.requests.burst", 20);
user_pref("network.http.connection-retry-timeout", 0);
user_pref("network.dnsCacheEntries", 10000);
user_pref("network.dnsCacheExpiration", 86400);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 32768);

/** SPECULATIVE CONNECTIONS ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.cert_pinning.enforcement_level", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.sessionstore.privacy_level", 2);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS AND AUTOFILL ***/
user_pref("signon.rememberSignons", false);
user_pref("editor.truncate_user_pastes", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("permissions.delegation.enabled", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("app.update.suppressPrompts", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("browser.privatebrowsing.enable-new-indicator", false);
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);
user_pref("browser.translations.enable", true);

/** FULLSCREEN ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("pdfjs.sidebarViewOnLoad", 2);

/** TAB BEHAVIOR ***/
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
///  NATURAL SMOOTH SCROLLING V4 "SHARP" - AveYo, 2020-2022             preset     [default]
///  copy into firefox/librewolf profile as user.js, add to existing, or set in about:config
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   200);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "2.0");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);//NSS   [2000]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]

/// adjust multiply factor for mousewheel - or set to false if scrolling is way too fast  
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);//NSS    [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);//NSS    [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);//NSS   [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);//NSS   [true]

/// adjust pixels at a time count for mousewheel - cant do more than a page at once if <100
user_pref("mousewheel.default.delta_multiplier_x",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_y",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);//NSS    [100]

///  this preset will reset couple extra variables for consistency
user_pref("apz.allow_zooming",                                          true);//NSS   [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);//NSS  [false]
user_pref("apz.paint_skipping.enabled",                                 true);//NSS   [true]
user_pref("apz.windows.use_direct_manipulation",                        true);//NSS   [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",           false);//NSS  [false]
user_pref("general.smoothScroll.durationToIntervalRatio",                200);//NSS    [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.lines.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",               150);//NSS    [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               200);//NSS    [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                50);//NSS     [50]
user_pref("layers.async-pan-zoom.enabled",                              true);//NSS   [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");//NSS    [250]
user_pref("mousewheel.transaction.timeout",                             1500);//NSS   [1500]
user_pref("mousewheel.acceleration.factor",                               10);//NSS     [10]
user_pref("mousewheel.acceleration.start",                                -1);//NSS     [-1]
user_pref("mousewheel.min_line_scroll_amount",                             5);//NSS      [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);//NSS      [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);//NSS      [3]
///
/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// Enter your personal prefs below this line:
user_pref("browser.download.useDownloadDir", true); #Use custom downloads folder
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); #Enable topsites
user_pref("browser.theme.dark-private-windows", false); #Disable dark theme in private windows
user_pref("browser.urlbar.suggest.calculator", true); #Enable calculator on urlbar
user_pref("cookiebanners.bannerClicking.enabled", true); #I don't care about cookies
user_pref("cookiebanners.cookieInjector.enabled", true); 
user_pref("identity.fxaccounts.enabled", true); #Enable Firefox account
user_pref("nglayout.initialpaint.delay", 2000); #Work better with Dark Reader
user_pref("nglayout.initialpaint.delay_in_oopif", 2000);
user_pref("svg.context-properties.content.enabled", true); #Theming 
user_pref("widget.non-native-theme.scrollbar.style", 2); #Smaller scrollbar 
user_pref("xpinstall.signatures.required", false);#Install local addons 
user_pref("xpinstall.whitelist.required", false);
user_pref("dom.security.https_first", true); #Force HTTPS
user_pref("network.dnsCacheEntries", -1); #Unlimited DNS cache queries
user_pref("network.dns.disableIPv6", true); #Disable IPv6
user_pref("network.dns.http3_echconfig.enabled", true); #ECH 
user_pref("network.dns.echconfig.fallback_to_origin_when_all_failed", false);
user_pref("network.dns.force_use_https_rr", true); #Force website to wait for HTTPS record
user_pref("network.dns.force_waiting_https_rr", true);
user_pref("network.dns.echconfig.enabled", true); 
user_pref("network.dns.skipTRR-when-parental-control-enabled", false); #TRR
user_pref("network.http.http3.alt-svc-mapping-for-testing", "doh3.dns.nextdns.io;h3=\":443\"; quicv=\"6b3343cf,1\""); Enable QUICv2
user_pref("network.http.http3.send_background_tabs_deprioritization", true); #HTTP3
user_pref("network.http.http3.version_negotiation.enabled", true);
user_pref("network.trr.async_connInfo", true); #TRR
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("network.trr.custom_uri", "https://doh3.dns.nextdns.io"); #Set Firefox DNS to NextDNS
user_pref("network.trr.default_provider_uri", "https://doh3.dns.nextdns.io");
user_pref("network.trr.disable-ECS", false);
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://doh3.dns.nextdns.io"); 
user_pref("security.OCSP.enabled", 0); #Turnoff OSCP
user_pref("security.tls.ech.disable_grease_on_fallback", false);
user_pref("security.tls.ech.grease_http3", true);
user_pref("security.tls.ech.grease_probability", 100);
//
/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

