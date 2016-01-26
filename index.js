module.exports = {
  WebClient: require('./lib/clients/web/client'),
  RtmClient: require('./lib/clients/rtm/client'),
  LegacyRTMClient: require('./lib/clients/default/legacy-rtm'),
  EVENTS: require('./lib/clients/events'),
};
