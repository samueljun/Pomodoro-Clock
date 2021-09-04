import { i18n } from "webextension-polyfill";

export const NOTIFICATION_ID = "tomatoClockNotification";

export const STORAGE_KEY = {
  TIMELINE: "timeline",
  SETTINGS: "settings",
};

export const SETTINGS_KEY = {
  MINUTES_IN_TOMATO: "minutesInTomato",
  MINUTES_IN_SHORT_BREAK: "minutesInShortBreak",
  MINUTES_IN_LONG_BREAK: "minutesInLongBreak",
  IS_NOTIFICATION_SOUND_ENABLED: "isNotificationSoundEnabled",
  IS_TOOLBAR_BADGE_ENABLED: "isToolbarBadgeEnabled",
};

export const DEFAULT_SETTINGS = {
  [SETTINGS_KEY.MINUTES_IN_TOMATO]: 25,
  [SETTINGS_KEY.MINUTES_IN_SHORT_BREAK]: 5,
  [SETTINGS_KEY.MINUTES_IN_LONG_BREAK]: 15,
  [SETTINGS_KEY.IS_NOTIFICATION_SOUND_ENABLED]: false,
  [SETTINGS_KEY.IS_TOOLBAR_BADGE_ENABLED]: true,
};

export const TIMER_TYPE = {
  TOMATO: "tomato",
  SHORT_BREAK: "shortBreak",
  LONG_BREAK: "longBreak",
};

export const BADGE_BACKGROUND_COLOR_BY_TIMER_TYPE = {
  [TIMER_TYPE.TOMATO]: "#dc3545",
  [TIMER_TYPE.SHORT_BREAK]: "#666",
  [TIMER_TYPE.LONG_BREAK]: "#666",
};

export const RUNTIME_ACTION = {
  SET_TIMER: "setTimer",
  RESET_TIMER: "resetTimer",
  GET_TIMER_SCHEDULED_TIME: "getTimerScheduledTime",
};

export const DATE_UNIT = {
  DATE: "day",
  MONTH: "month",
};

export const MONTH_NAMES = [
  i18n.getMessage("monthNameJanuary"),
  i18n.getMessage("monthNameFebruary"),
  i18n.getMessage("monthNameMarch"),
  i18n.getMessage("monthNameApril"),
  i18n.getMessage("monthNameMay"),
  i18n.getMessage("monthNameJune"),
  i18n.getMessage("monthNameJuly"),
  i18n.getMessage("monthNameAugust"),
  i18n.getMessage("monthNameSeptember"),
  i18n.getMessage("monthNameOctober"),
  i18n.getMessage("monthNameNovember"),
  i18n.getMessage("monthNameDecember"),
];
