//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * BetterFox                                                                *
 * "Memento mori."                                                          *
 * version: December 2021                                                   *
 * url: https://github.com/nvt194/Better-Fox                                *
 * license: https://github.com/nvt194/Better-Fox/blob/master/LICENSE        *
 * README: https://github.com/nvt194/Better-Fox/blob/master/README.md       *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("browser.startup.homepage.abouthome_cache.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.partition.serviceWorkers", true);
user_pref("beacon.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/** CLEARING DATA DEFAULTS ***/
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.history.custom", true);

/** SPECULATIVE CONNECTIONS ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.preload", false);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/** DNS-over-HTTPS (DOH) ***/
user_pref("network.trr.send_user-agent_headers", false);
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);

/** PASSWORDS AND AUTOFILL ***/
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("signon.privateBrowsingCapture.enabled", false);
/* NOTE: Remove everything below this line if you use Firefox's password manager */
user_pref("signon.management.page.breach-alerts.enabled", false); 
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.autologin.proxy", false);
user_pref("signon.debug", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.fileImport.enabled", false);
user_pref("signon.importedFromSqlite", false);
user_pref("signon.recipes.path", "");
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.autocompleteOff", true);
user_pref("signon.showAutoCompleteOrigins", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("extensions.fxmonitor.enabled", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("permissions.delegation.enabled", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** GOOGLE SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
/* WARNING: Be sure to have alternate security measures if you disable Safe Browsing! */
/* NOTE: Remove everything below this line if you use this feature */
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/** MOZILLA ***/
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("app.update.auto", false);
user_pref("app.update.background.scheduling.enabled", false);

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
user_pref("corroborator.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("default-browser-agent.enabled", false);
user_pref("extensions.abuseReport.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/

/** MOZILLA UI ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); #enable custom stysheets for theming
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("identity.fxaccounts.enabled", true); #enable firefox account
/** WARNINGS ***/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.aboutConfig.showWarning", false);

/** FULLSCREEN ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", -1);

/** NEW TAB PAGE ***/
user_pref("browser.startup.page", 3);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); #enable topsites
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api"," ");
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", true); #use custom downloads folder
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);

/** VARIOUS ***/
user_pref("browser.compactmode.show", true); #show compact mode
user_pref("browser.menu.showViewImageInfo", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("dom.push.enabled", false);
user_pref("findbar.highlightAll", true);
user_pref("layout.spellcheckDefault", 2);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.display.show_image_placeholders", false);
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("layout.css.constructable-stylesheets.enabled", true);
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.forms.inputmode", true);

/** TAB BEHAVIOR ***/
user_pref("dom.disable_window_move_resize", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("image.jxl.enabled", true);
user_pref("editor.truncate_user_pastes", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);
user_pref("clipboard.plainTextOnly", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 * url: https://github.com/AveYo/fox                                        *
 * natural smooth scrolling by AveYo                                        *
****************************************************************************/

///  NATURAL SMOOTH SCROLLING V3 - AveYo, 2020-2021                     preset     [default]
user_pref("apz.allow_zooming",                                          true);//NSS   [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);//NSS  [false]
user_pref("apz.paint_skipping.enabled",                                 true);//NSS   [true]
user_pref("apz.windows.use_direct_manipulation",                        true);//NSS   [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",            true);//NSS  [false]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.durationToIntervalRatio",               1000);//NSS    [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    100);//NSS    [150]
user_pref("general.smoothScroll.lines.durationMinMS",                      0);//NSS    [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               100);//NSS    [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                 0);//NSS     [50]
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   175);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",      1500);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           10);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "1.1");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",     1000);//NSS   [2000]
user_pref("general.smoothScroll.other.durationMaxMS",                    100);//NSS    [150]
user_pref("general.smoothScroll.other.durationMinMS",                      0);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    100);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMinMS",                      0);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   100);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                     0);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               100);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",                 0);//NSS    [150]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]
user_pref("layers.async-pan-zoom.enabled",                              true);//NSS   [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");//NSS    [250]
user_pref("mousewheel.acceleration.factor",                               10);//NSS     [10]
user_pref("mousewheel.acceleration.start",                                -1);//NSS     [-1]
user_pref("mousewheel.default.delta_multiplier_x",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_y",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);//NSS    [100]
user_pref("mousewheel.min_line_scroll_amount",                             0);//NSS      [5]
user_pref("mousewheel.system_scroll_override.enabled",                  true);//NSS   [true]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);//NSS   [true]
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);//NSS    [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);//NSS    [200]
user_pref("mousewheel.transaction.timeout",                             1500);//NSS   [1500]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    4);//NSS      [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);//NSS      [3]
///  this preset will reset couple extra variables for consistency
///  copy into your firefox profile as user.js, add to existing one or edit via about:config

/// AveYo: uncomment if scroll too fast
//user_pref("mousewheel.system_scroll_override.enabled", false);            

/// AveYo: uncomment if you prefer even more smoothness than V3 
//user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   125);//NSS+  [1250]
//user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       500);//NSS+  [1000]

// AveYo: uncomment for something more sharper, then fiddle with these going lower for smoothness:
//user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",  1250);
//user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",      1000);

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

/****************************************************************************
 * My theming stuffs                                                        *       
 ***************************************************************************/
user_pref("browser.urlbar.suggest.calculator", true); #enable calculator on urlbar,
user_pref("svg.context-properties.content.enabled", true); #theming stuffs,
