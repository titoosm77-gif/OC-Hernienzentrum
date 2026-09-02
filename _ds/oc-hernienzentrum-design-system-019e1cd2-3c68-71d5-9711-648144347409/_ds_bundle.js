/* @ds-bundle: {"format":4,"namespace":"OCHernienzentrumDesignSystem_019e1c","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/Eyebrow/Eyebrow.jsx"},{"name":"FAQItem","sourcePath":"components/FAQItem/FAQItem.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"InfoBox","sourcePath":"components/InfoBox/InfoBox.jsx"},{"name":"Pill","sourcePath":"components/Pill/Pill.jsx"},{"name":"SectionHead","sourcePath":"components/SectionHead/SectionHead.jsx"},{"name":"TrustItem","sourcePath":"components/TrustItem/TrustItem.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"78c704fbb09b","components/Card/Card.jsx":"09bf9b85e3cd","components/Eyebrow/Eyebrow.jsx":"b34071cfa615","components/FAQItem/FAQItem.jsx":"1364f14dfc3e","components/Icon/Icon.jsx":"db0a233424db","components/InfoBox/InfoBox.jsx":"e8f66ef181ea","components/Pill/Pill.jsx":"a7b789ec178f","components/SectionHead/SectionHead.jsx":"4c2605bf26a9","components/TrustItem/TrustItem.jsx":"e1a41e3ea892","ui_kits/web/AboutPage.jsx":"0288fda17488","ui_kits/web/App.jsx":"16a499346e0b","ui_kits/web/CVPage.jsx":"d738790892e6","ui_kits/web/ContactPage.jsx":"38e677d74a17","ui_kits/web/DetailPage.jsx":"19ceadb79e74","ui_kits/web/FAQPage.jsx":"8f6d4e0db2d2","ui_kits/web/Footer.jsx":"e581ee0d33d0","ui_kits/web/Header.jsx":"59cf96cbe017","ui_kits/web/HerniaTypesPage.jsx":"9ee40dc69325","ui_kits/web/HomePage.jsx":"b26c48219cf6","ui_kits/web/ImprintPage.jsx":"89126135e960","ui_kits/web/kit-icons.jsx":"29741b33d8a5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OCHernienzentrumDesignSystem_019e1c = window.OCHernienzentrumDesignSystem_019e1c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary and ghost action button.
 * Primary is navy-700 filled; ghost is transparent with a hairline border.
 * Both lift 1px on hover. Never use ALL-CAPS labels.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  href,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const large = size === 'lg';
  const ghost = variant === 'ghost';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: large ? '12px 24px' : '9px 16px',
    borderRadius: large ? 16 : 10,
    fontFamily: "'Manrope','Inter',system-ui,sans-serif",
    fontSize: large ? 15 : 13.5,
    fontWeight: 600,
    lineHeight: 1.2,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'all .2s ease',
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    border: ghost ? '1px solid ' + (hover && !disabled ? '#3D4D8A' : '#E5E7EE') : 'none',
    background: ghost ? hover && !disabled ? '#F1F3FA' : 'transparent' : hover && !disabled ? '#2A3970' : '#1F2C5C',
    color: ghost ? '#1F2C5C' : '#fff',
    ...style
  };
  const glyph = icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: large ? 16 : 14,
    strokeWidth: icon === 'arrowRight' ? 2.4 : 2
  }) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'start' && glyph, /*#__PURE__*/React.createElement("span", null, children), iconPosition === 'end' && glyph);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base,
    ...rest
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, handlers), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, handlers), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * White card on a hairline border — the system's canonical surface.
 * No shadow at rest; lifts with a navy-tinted shadow and a teal border on hover.
 * `accentBar` reveals the 4px navy-to-teal gradient used on the hernia-type grid.
 */
function Card({
  children,
  accentBar = false,
  interactive = true,
  padding = '26px 24px',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#FFFFFF',
      border: '1px solid ' + (lifted ? accentBar ? 'transparent' : '#5BBFAE' : '#E5E7EE'),
      borderRadius: 16,
      padding,
      display: 'flex',
      flexDirection: 'column',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all .25s ease',
      transform: lifted ? 'translateY(-3px)' : 'none',
      boxShadow: lifted ? '0 18px 40px rgba(15,26,61,0.10), 0 6px 14px rgba(15,26,61,0.06)' : 'none',
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 4,
      background: 'linear-gradient(90deg, #1F2C5C, #3FA796)',
      opacity: lifted ? 1 : 0,
      transition: 'opacity .25s ease'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Eyebrow/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The uppercase tracked label that sits above every section title.
 * Two shapes: a bare text label (`plain`) or the pill-shaped hero
 * variant with a teal wash and a leading glyph (`pill`).
 */
function Eyebrow({
  children,
  variant = 'plain',
  icon,
  style,
  ...rest
}) {
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: '#EDF8F5',
        color: '#2E8674',
        border: '1px solid #DCF1ED',
        padding: '6px 14px',
        borderRadius: 999,
        fontFamily: "'Manrope','Inter',system-ui,sans-serif",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.02em',
        ...style
      }
    }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 14
    }), /*#__PURE__*/React.createElement("span", null, children));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#3FA796',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/FAQItem/FAQItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single question row in the FAQ accordion. The toggle glyph is an ASCII
 * plus that rotates 45° into a cross when the row opens.
 */
function FAQItem({
  question,
  children,
  defaultOpen = false,
  open,
  onToggle,
  dir = 'ltr',
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internal;
  const [hover, setHover] = React.useState(false);
  const toggle = () => {
    if (onToggle) onToggle(!isOpen);
    if (!isControlled) setInternal(o => !o);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + (isOpen ? '#3FA796' : hover ? '#5BBFAE' : '#E5E7EE'),
      borderRadius: 16,
      marginBottom: 10,
      overflow: 'hidden',
      transition: 'all .2s ease',
      boxShadow: isOpen ? '0 4px 14px rgba(15,26,61,0.06), 0 2px 6px rgba(15,26,61,0.04)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": isOpen,
    style: {
      width: '100%',
      padding: '18px 22px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      textAlign: dir === 'rtl' ? 'right' : 'left',
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.4,
      color: '#1F2C5C',
      background: hover && !isOpen ? '#F1F3FA' : 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'background .15s ease'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: isOpen ? '#3FA796' : '#EDF8F5',
      color: isOpen ? '#fff' : '#2E8674',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 14,
      fontWeight: 700,
      marginTop: 2,
      transform: isOpen ? 'rotate(45deg)' : 'none',
      transition: 'all .25s ease'
    }
  }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px 22px',
      borderTop: '1px solid #F0F2F7',
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      color: '#4A546B',
      fontSize: 15.5,
      lineHeight: 1.65
    }
  }, children));
}
Object.assign(__ds_scope, { FAQItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FAQItem/FAQItem.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m10 17-4.3-4.3',
  arrowRight: 'M5 12h14M13 5l7 7-7 7',
  arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  map: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
  external: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm18 2-10 7L2 6',
  calendar: 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M3 10h18',
  star: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
  check: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M9 11l3 3L22 4',
  warning: 'M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',
  snowflake: 'M12 2v8M12 18v4M4.93 10.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 13.07l5.66-5.66M13.41 10.59l5.66-5.66',
  document: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15h6M9 11h6',
  shield: 'M9 11H5a2 2 0 0 0-2 2v7h18v-7a2 2 0 0 0-2-2h-4M9 11V5a3 3 0 1 1 6 0v6M9 11h6',
  target: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18',
  menu: 'M4 6h16M4 12h16M4 18h16'
};

/**
 * The system's icon primitive. Every glyph follows the OC recipe:
 * 24-unit grid, no fill, stroke inherits `currentColor`.
 * Stroke-width is the only knob — 1.6 for large decorative glyphs,
 * 1.8 inside circular chips, 2 everywhere else, 2.4 for tiny arrows.
 */
function Icon({
  name = 'check',
  size = 18,
  strokeWidth = 2,
  color,
  style,
  ...rest
}) {
  const d = PATHS[name] || PATHS.check;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      color,
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Icon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/InfoBox/InfoBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soft teal callout with a 3px accent edge. The `disclaimer` tone carries
 * the fixed medical notice that must appear on every patient-facing page.
 */
function InfoBox({
  children,
  tone = 'info',
  title,
  dir = 'ltr',
  style,
  ...rest
}) {
  const accent = tone === 'warning' ? '#D89B4A' : tone === 'danger' ? '#C44545' : '#3FA796';
  const wash = tone === 'warning' ? '#FBF3E7' : tone === 'danger' ? '#F9EAEA' : '#EDF8F5';
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      background: wash,
      borderLeft: rtl ? 'none' : '3px solid ' + accent,
      borderRight: rtl ? '3px solid ' + accent : 'none',
      padding: '18px 22px',
      borderRadius: 10,
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: '#1A2342',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, title, " "), children);
}

/** The exact disclaimer required on every patient-facing screen. */
InfoBox.DISCLAIMER_DE = 'Diese Informationen ersetzen keine ärztliche Beratung. Sprechen Sie für Ihre individuelle Situation mit Ihrem behandelnden Arzt.';
Object.assign(__ds_scope, { InfoBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/InfoBox/InfoBox.jsx", error: String((e && e.message) || e) }); }

// components/Pill/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rounded chip used for FAQ category filters and the language switcher.
 * Active state fills navy-700 with a soft navy shadow.
 */
function Pill({
  children,
  active = false,
  onClick,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": active,
    style: {
      background: active ? '#1F2C5C' : '#FFFFFF',
      border: '1px solid ' + (active ? '#1F2C5C' : hover ? '#5BBFAE' : '#E5E7EE'),
      color: active ? '#fff' : hover ? '#1F2C5C' : '#4A546B',
      padding: sm ? '6px 12px' : '9px 16px',
      borderRadius: 999,
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      fontSize: sm ? 11.5 : 13.5,
      fontWeight: sm ? 700 : 500,
      letterSpacing: sm ? '0.04em' : 'normal',
      cursor: 'pointer',
      transition: 'all .2s ease',
      boxShadow: active ? '0 2px 8px rgba(31,44,92,0.18)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Pill/Pill.jsx", error: String((e && e.message) || e) }); }

// components/SectionHead/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The system's signature heading block: tracked eyebrow, a serif italic
 * title carrying exactly one upright accent word, and an optional sub-line.
 * Pass the accent word via `accent` — it is placed between `title` and `titleEnd`.
 */
function SectionHead({
  eyebrow,
  title,
  accent,
  titleEnd,
  sub,
  align = 'center',
  level = 2,
  style,
  ...rest
}) {
  const Tag = level === 1 ? 'h1' : 'h2';
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: 720,
      marginLeft: centered ? 'auto' : 0,
      marginRight: centered ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "'Fraunces','Cormorant Garamond',Georgia,serif",
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: level === 1 ? 'clamp(34px, 5.5vw, 56px)' : 'clamp(28px, 4vw, 40px)',
      letterSpacing: level === 1 ? '-0.02em' : '-0.01em',
      lineHeight: level === 1 ? 1.15 : 1.2,
      color: '#1A2342',
      margin: 0
    }
  }, title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      fontWeight: 500,
      color: '#2E8674'
    }
  }, accent)), titleEnd && /*#__PURE__*/React.createElement(React.Fragment, null, " ", titleEnd)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      fontSize: 17,
      lineHeight: 1.55,
      color: '#4A546B',
      margin: '14px 0 0'
    }
  }, sub));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SectionHead/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/TrustItem/TrustItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * One claim in the trust strip: a certification seal or a circular glyph chip,
 * paired with a bold claim and a quiet supporting line.
 */
function TrustItem({
  logoSrc,
  icon,
  tone = 'teal',
  claim,
  detail,
  style,
  ...rest
}) {
  const teal = tone === 'teal';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: "'Manrope','Inter',system-ui,sans-serif",
      ...style
    }
  }, rest), logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      width: 56,
      height: 56,
      objectFit: 'contain',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: teal ? '#EDF8F5' : '#F1F3FA',
      color: teal ? '#2E8674' : '#1F2C5C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon || 'check',
    size: 28,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: '#1F2C5C',
      fontWeight: 600,
      marginBottom: 2
    }
  }, claim), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7A8298',
      fontSize: 13
    }
  }, detail)));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TrustItem/TrustItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/AboutPage.jsx
try { (() => {
// About page — doctor portrait + credentials

const AboutPage = ({
  onOpenCV
}) => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "about"
}, /*#__PURE__*/React.createElement("div", {
  className: "about-photo"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/dr-osman.jpg",
  alt: "Dr. med. Tarek Osman"
})), /*#__PURE__*/React.createElement("div", {
  className: "about-content"
}, /*#__PURE__*/React.createElement("span", {
  className: "about-role"
}, "Ihr Operateur"), /*#__PURE__*/React.createElement("h2", null, "Dr. med. ", /*#__PURE__*/React.createElement("em", null, "Tarek Osman")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: "15px",
    color: "var(--teal-700)",
    fontWeight: 600,
    letterSpacing: "0.04em",
    marginBottom: "24px",
    textTransform: "uppercase"
  }
}, "Facharzt f\xFCr Allgemein- und Viszeralchirurgie"), /*#__PURE__*/React.createElement("p", null, "Als zertifizierter Hernienoperateur und Mitglied der Deutschen Herniengesellschaft (DHG) habe ich mich auf die operative Behandlung s\xE4mtlicher Hernienformen spezialisiert. In unserem zertifizierten Hernienzentrum verbinden wir modernste minimal-invasive Operationstechniken mit individueller Patientenversorgung."), /*#__PURE__*/React.createElement("p", null, "Schwerpunkte meiner T\xE4tigkeit liegen in der laparo/endoskopischen Hernienchirurgie (TEP, TAPP, eTEP, E-MILOS, Lap IPOM), in der Versorgung komplexer Narben- und Rezidivhernien sowie in nervenerhaltenden Operationstechniken zur Vermeidung chronischer Schmerzen."), /*#__PURE__*/React.createElement("div", {
  className: "credentials"
}, ["Zertifizierter Hernienoperateur (DHG)", "Facharzt für Chirurgie", "Mitglied der Deutschen Herniengesellschaft", "Teilnahme an Herniamed-Qualitätssicherung"].map((c, i) => /*#__PURE__*/React.createElement("div", {
  className: "cred",
  key: i
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 18
}), /*#__PURE__*/React.createElement("span", null, c)))), /*#__PURE__*/React.createElement("button", {
  className: "cv-link",
  onClick: onOpenCV
}, /*#__PURE__*/React.createElement(Icon, {
  name: "file",
  size: 18
}), /*#__PURE__*/React.createElement("span", null, "Vollst\xE4ndigen Lebenslauf ansehen"))))));
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/App.jsx
try { (() => {
const App = () => {
  // page can be: home / about / types / faq / contact / imprint / cv / detail:{slug}
  const [page, setPage] = React.useState("home");
  const [lang, setLang] = React.useState("de");
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [page]);
  const goBack = target => () => setPage(target);
  const openDetail = name => {
    const slug = {
      "Leistenhernie": "leistenhernie",
      "Nabelhernie": "nabelhernie",
      "Narbenhernie": "narbenhernie"
    }[name];
    if (slug) setPage("detail:" + slug);
  };
  let PageView;
  if (page.startsWith("detail:")) {
    PageView = /*#__PURE__*/React.createElement(DetailPage, {
      slug: page.slice(7),
      onBack: goBack("types")
    });
  } else if (page === "cv") {
    PageView = /*#__PURE__*/React.createElement(CVPage, {
      onBack: goBack("about")
    });
  } else if (page === "imprint") {
    PageView = /*#__PURE__*/React.createElement(ImprintPage, null);
  } else {
    PageView = {
      home: /*#__PURE__*/React.createElement(HomePage, {
        onNavigate: setPage
      }),
      about: /*#__PURE__*/React.createElement(AboutPage, {
        onOpenCV: () => setPage("cv")
      }),
      types: /*#__PURE__*/React.createElement(HerniaTypesPage, {
        onOpenDetail: openDetail
      }),
      faq: /*#__PURE__*/React.createElement(FAQPage, null),
      contact: /*#__PURE__*/React.createElement(ContactPage, null)
    }[page];
  }

  // Active top-nav tab for sub-pages
  const navPage = page.startsWith("detail:") ? "types" : page === "cv" ? "about" : page;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    page: navPage,
    onNavigate: setPage,
    lang: lang,
    onLang: setLang
  }), PageView, /*#__PURE__*/React.createElement(Footer, {
    onNavigate: setPage
  }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/CVPage.jsx
try { (() => {
// CV (Lebenslauf) page — Dr. Osman's full vita

const CV_CAREER = [["1997 – 2002", "Medizinstudium an der Medizinischen Fakultät der Universität Damaskus, Syrien."], ["2002", "Verleihung des Doktorgrades, Thesis „Esophageal Surgical Abnormalities\"."], ["2004 – 2007", "Wissenschaftlicher und klinischer Assistenzarzt im Forschungslabor des europäischen Pankreaszentrums (Prof. M. W. Büchler / Prof. H. Friess)."], ["2006", "Promotion (Dr. med.), Universität Heidelberg, „Magna cum laude\"."], ["2008 – 2011", "Assistenzarzt für Allgemein-, Viszeral- und Unfallchirurgie, GRN Klinik Eberbach."], ["2011 – 2013", "Assistenzarzt für Allgemein-, Viszeral- und Gefäßchirurgie, GRN Klinik Schwetzingen."], ["2013", "Facharzt für Chirurgie."], ["2014 – 2018", "Kompetenzzentrum für Hernienchirurgie, GRN Klinik Schwetzingen."], ["2016 – heute", "Funktionsoberarzt, GRN Klinik Schwetzingen."], ["2019", "Facharzt für Viszeralchirurgie."], ["2020", "Gründer und Leiter des Zentrums für Hernienchirurgie in der OC | OrthoChirurgie."], ["2024", "Gesellschafter in der OC | OrthoChirurgie."]];
const CV_FOCUS = ["Hernienchirurgie", "Diagnostik und Therapie chronischer Leistenschmerzen", "Viszeralchirurgie (diagnostische Laparoskopie, Cholezystektomie u. a.)", "Port-Implantationen und Explantationen", "Diagnostik und Behandlung von Gelenk- und Rückenerkrankungen, Gelenkinjektionen"];
const CV_MEMBER = ["Deutsche Gesellschaft für Allgemein- und Viszeralchirurgie (DGAV)", "Deutsche Gesellschaft für Chirurgie (DGCH)", "Deutsche Herniengesellschaft (DHG)", "Berufsverband der deutschen Chirurgen (BDC)"];
const CVPage = ({
  onBack
}) => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "cv-page"
}, /*#__PURE__*/React.createElement("button", {
  className: "back-link",
  onClick: onBack
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrowLeft",
  size: 16
}), /*#__PURE__*/React.createElement("span", null, "Zur\xFCck zu \xDCber mich")), /*#__PURE__*/React.createElement("div", {
  className: "section-eyebrow"
}, "Curriculum Vitae"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(32px, 4vw, 46px)",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    marginBottom: "32px",
    color: "var(--navy-800)"
  }
}, /*#__PURE__*/React.createElement("span", null, "Lebenslauf "), /*#__PURE__*/React.createElement("em", {
  style: {
    fontStyle: "italic",
    color: "var(--teal-700)"
  }
}, "Dr. med. Tarek Osman")), /*#__PURE__*/React.createElement("div", {
  className: "cv-section"
}, /*#__PURE__*/React.createElement("h2", null, "Beruflicher Werdegang"), /*#__PURE__*/React.createElement("ul", {
  className: "cv-list"
}, CV_CAREER.map(([year, text], i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, /*#__PURE__*/React.createElement("span", {
  className: "cv-year"
}, year), /*#__PURE__*/React.createElement("span", null, text))))), /*#__PURE__*/React.createElement("div", {
  className: "cv-section"
}, /*#__PURE__*/React.createElement("h2", null, "T\xE4tigkeitsschwerpunkte"), /*#__PURE__*/React.createElement("ul", {
  className: "cv-list"
}, CV_FOCUS.map((f, i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, f)))), /*#__PURE__*/React.createElement("div", {
  className: "cv-section"
}, /*#__PURE__*/React.createElement("h2", null, "Mitgliedschaften"), /*#__PURE__*/React.createElement("ul", {
  className: "cv-list"
}, CV_MEMBER.map((m, i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, m)))))));
window.CVPage = CVPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/CVPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ContactPage.jsx
try { (() => {
// Contact page — contact cards (Praxis, Klinik, Email, Doctolib) + QR block

const ContactCard = ({
  logo,
  logoSrc,
  type,
  name,
  addr1,
  addr2,
  phone,
  website,
  mapUrl,
  doctolibStyle
}) => /*#__PURE__*/React.createElement("article", {
  className: "contact-card" + (doctolibStyle ? " doctolib-card" : "")
}, /*#__PURE__*/React.createElement("div", {
  className: "contact-card-header"
}, /*#__PURE__*/React.createElement("div", {
  className: "contact-logo"
}, logoSrc ? /*#__PURE__*/React.createElement("img", {
  src: logoSrc,
  alt: name
}) : logo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "ctype"
}, type), /*#__PURE__*/React.createElement("h3", null, name))), /*#__PURE__*/React.createElement("p", {
  className: "addr"
}, addr1, addr2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), addr2)), /*#__PURE__*/React.createElement("div", {
  className: "contact-actions"
}, phone && /*#__PURE__*/React.createElement("a", {
  className: "btn",
  href: `tel:${phone.replace(/\s+/g, "")}`
}, /*#__PURE__*/React.createElement(Icon, {
  name: "phone",
  size: 14
}), phone), website && /*#__PURE__*/React.createElement("a", {
  className: "btn btn-ghost",
  href: website,
  target: "_blank",
  rel: "noopener"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "external",
  size: 14
}), "Website"), mapUrl && /*#__PURE__*/React.createElement("a", {
  className: "btn btn-ghost",
  href: mapUrl,
  target: "_blank",
  rel: "noopener"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "map",
  size: 14
}), "Karte")));
const QRBlock = () => /*#__PURE__*/React.createElement("div", {
  className: "qr-block"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/qrcode.png",
  alt: "QR Code Praxis"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Direkt zur Praxis"), /*#__PURE__*/React.createElement("p", null, "Scannen Sie den QR-Code, um zu unseren Praxisinformationen, Online-Terminen und Wegbeschreibung zu gelangen.")));
const ContactPage = () => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-eyebrow"
}, "Kontakt"), /*#__PURE__*/React.createElement("h2", null, "So ", /*#__PURE__*/React.createElement("em", null, "erreichen"), " Sie uns."), /*#__PURE__*/React.createElement("p", null, "Wir sind f\xFCr Sie an zwei Praxisstandorten und in unseren Operationskliniken erreichbar.")), /*#__PURE__*/React.createElement("div", {
  className: "contact-grid"
}, /*#__PURE__*/React.createElement(ContactCard, {
  logoSrc: "../../assets/logo.png",
  type: "Praxis",
  name: "OC Ludwigshafen",
  addr1: "Berthold-Schwarz-Str. 26",
  addr2: "67063 Ludwigshafen-Friesenheim",
  phone: "0621 53399050",
  website: "https://oc-orthochirurgie.com/",
  mapUrl: "https://maps.google.com/?q=Berthold-Schwarz-Str.+26,+67063+Ludwigshafen"
}), /*#__PURE__*/React.createElement(ContactCard, {
  logoSrc: "../../assets/logo.png",
  type: "Praxis",
  name: "OC Mutterstadt",
  addr1: "Oggersheimer Stra\xDFe 42",
  addr2: "67112 Mutterstadt",
  phone: "06234 9288500",
  website: "https://oc-orthochirurgie.com/",
  mapUrl: "https://maps.google.com/?q=Oggersheimer+Stra%C3%9Fe+42,+67112+Mutterstadt"
}), /*#__PURE__*/React.createElement(ContactCard, {
  logoSrc: "../../assets/apollonia-logo.jpg",
  type: "Klinik (OP)",
  name: "Apollonia Kurpfalzklinik",
  addr1: "Ludwigshafen am Rhein",
  addr2: "Ambulante Hernienchirurgie",
  phone: "0621 5299247",
  website: "https://apollonia-kurpfalzklinik.de/",
  mapUrl: "https://maps.google.com/?q=Apollonia+Kurpfalzklinik+Ludwigshafen"
}), /*#__PURE__*/React.createElement(ContactCard, {
  logoSrc: "../../assets/grn-logo.png",
  type: "Klinik (OP)",
  name: "GRN Klinik Schwetzingen",
  addr1: "68723 Schwetzingen",
  addr2: "Ambulante & station\xE4re Hernienchirurgie",
  phone: "06202 8465230",
  website: "https://www.grn.de/",
  mapUrl: "https://maps.google.com/?q=GRN+Klinik+Schwetzingen"
}), /*#__PURE__*/React.createElement(ContactCard, {
  logo: /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 28,
    strokeWidth: 1.6,
    style: {
      color: "var(--navy-700)"
    }
  }),
  type: "E-Mail",
  name: "Allgemeine Anfragen",
  addr1: "F\xFCr nicht dringliche Anfragen, Befund\xFCbermittlung oder R\xFCckfragen erreichen Sie uns am einfachsten per E-Mail.",
  phone: "info@oc-orthochirurgie.com"
}), /*#__PURE__*/React.createElement(ContactCard, {
  doctolibStyle: true,
  logoSrc: "../../assets/doctolib-logo.jpg",
  type: "Doctolib",
  name: "Online-Termin buchen",
  addr1: "Vereinbaren Sie bequem online einen Wunschtermin bei Dr. med. Tarek Osman \u2014 rund um die Uhr verf\xFCgbar.",
  phone: "Termin buchen"
})), /*#__PURE__*/React.createElement(QRBlock, null)));
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/DetailPage.jsx
try { (() => {
// Detail page — long-form patient info on a single hernia type.
// Mirrors source/index.html sections for Leistenhernie, Nabelhernie, Narbenhernie.

const DETAIL_DATA = {
  leistenhernie: {
    eyebrow: "Patienteninformation",
    titleA: "Die",
    titleEm: "Leistenhernie",
    titleZ: "(Leistenbruch)",
    sections: [{
      h: "Was ist ein Leistenbruch?",
      intro: "Bei einem Leistenbruch drücken sich Eingeweide, wie zum Beispiel der Dünndarm, durch eine natürliche Schwachstelle der Bauchwand direkt in den Leistenkanal.",
      bullets: [["Anatomie:", "Durch diesen Kanal verläuft beim Mann der Samenleiter und bei der Frau das Mutterband."], ["Erkennung:", "Oft bildet sich eine von außen sicht- und tastbare Vorwölbung."], ["Häufigkeit:", "Männer sind weitaus deutlicher von einem Leistenbruch betroffen als Frauen."]]
    }, {
      h: "Wie kommt es zu einem Leistenbruch?",
      intro: "Es gibt nicht die eine Ursache; oft spielen verschiedene Risikofaktoren zusammen:",
      bullets: [["Gewebe:", "Eine geschwächte Bauchwandmuskulatur oder schwaches Bindegewebe."], ["Druck:", "Erhöhter Druck im Bauchinnenraum."], ["Auslöser:", "Schweres Heben und Tragen, chronischer Husten (häufig bei Rauchern), starkes Niesen oder heftiges Pressen beim Stuhlgang."]]
    }, {
      h: "Behandlung und Operation",
      intro: "In der modernen Bruchchirurgie wird jeder Patient individuell versorgt. Die Wahl des Verfahrens hängt von der Größe und Form des Bruches sowie den Ansprüchen des Patienten ab. Dabei orientieren wir uns in der OC | OrthoChirurgie an den Leitlinien der europäischen Herniengesellschaft.",
      sub: [{
        h: "1. Netzfreies Verfahren",
        p: "Nicht jeder Bruch muss mit einem Netz verstärkt werden. Bei einer offenen Operation (ca. 5–7 cm langer Schnitt) wird der Bruchsack in die Bauchhöhle zurückgebracht. Die Bruchlücke wird plastisch mit dem eigenen Gewebe des Patienten gedeckt."
      }, {
        h: "2. Netzverfahren",
        p: "Hier wird die Schwachstelle zusätzlich durch ein spezielles Kunststoffnetz stabilisiert.",
        bullets: [["Lichtenstein-OP:", "Eines der am häufigsten eingesetzten Verfahren."], ["TEP- oder TAPP-Operation:", "„Schlüssellochoperationen\" (minimalinvasiv). Über kleine Schnitte unterhalb des Nabels werden großflächige Netze von der Rückseite der Bauchwand eingesetzt. Bei der TAPP geht der Chirurg in den Bauchraum und versorgt die Hernie. Bei der TEP bleibt der Chirurg außerhalb des Bauchraums."]]
      }]
    }]
  },
  nabelhernie: {
    eyebrow: "Patienteninformation",
    titleA: "Die",
    titleEm: "Nabelhernie",
    titleZ: "(Nabelbruch)",
    sections: [{
      h: "Was ist eine Nabelhernie?",
      intro: "Bei einem Bruch (Hernie) drücken sich Eingeweide, beispielsweise der Dünndarm, durch eine Schwachstelle der Bauchwand nach außen. Im Falle einer Nabelhernie befindet sich diese Schwachstelle im Bereich des Nabels. Oft bildet sich dabei eine von außen sicht- und tastbare Vorwölbung."
    }, {
      h: "Wie kommt es zu einer Nabelhernie?",
      intro: "Ein Bruch kann verschiedene Ursachen haben und durch zahlreiche Risikofaktoren gefördert werden:",
      bullets: [["Gewebe:", "Eine geschwächte Bauchwandmuskulatur oder schwaches Bindegewebe spielen eine zentrale Rolle."], ["Druck:", "Erhöhter Druck im Inneren des Bauches ist ein Hauptauslöser."], ["Belastungen:", "Dieser Druck kann durch schweres Tragen und Heben, chronisches Husten, Niesen oder anstrengendes Pressen beim Stuhlgang hervorgerufen werden."]]
    }, {
      h: "Wie wird eine Nabelhernie operiert?",
      intro: "Die Wahl des Verfahrens hängt von der Größe und Form des Bruches sowie den Ansprüchen des Patienten ab. Dabei orientieren wir uns an den Leitlinien der europäischen Herniengesellschaft.",
      bullets: [["Netzfreies Verfahren:", "Bei diesem offenen Eingriff wird der Bruchsack zurückgebracht und die Lücke plastisch mit eigenem resorbierbaren oder nicht resorbierbarer Naht verschlossen."], ["Netzverfahren:", "Hier wird die Bruchlücke mit einem speziellen Kunststoffnetz stabilisiert. Dies kann offen (PUMP, MILOS, IPOM) oder mittels Schlüssellochoperation (eTEP, E-MILOS, Lap IPOM) erfolgen."]]
    }]
  },
  narbenhernie: {
    eyebrow: "Patienteninformation",
    titleA: "Die",
    titleEm: "Narbenhernie",
    titleZ: "(Narbenbruch)",
    sections: [{
      h: "Was ist eine Narbenhernie?",
      intro: "Eine Narbenhernie ist ein Bruch, der im Bereich einer früheren Operationsnarbe auftritt. Dabei drücken sich Eingeweide durch die dort entstandene Schwachstelle der Bauchwand. Es kann eine Vorwölbung entstehen, die von außen sichtbar und tastbar ist."
    }, {
      h: "Wie kommt es zu einer Narbenhernie?",
      intro: "Die Entstehung wird durch eine Kombination aus lokaler Schwäche und innerem Druck begünstigt:",
      bullets: [["Gewebe:", "Die Bauchwandmuskulatur oder das Bindegewebe im Bereich der Narbe ist geschwächt."], ["Druckfaktoren:", "Starker Druck im Bauchraum fördert das Nachgeben der Narbe."], ["Risiken:", "Faktoren wie chronischer Husten (z. B. bei Rauchern), schweres Heben oder starkes Pressen erhöhen das Risiko."]]
    }, {
      h: "Wie wird eine Narbenhernie operiert?",
      intro: "In der Regel muss eine Narbenhernie mittels Netzes versorgt werden. Eine Versorgung mittels Direktnaht ist oft mit einem sehr hohen Rezidivrisiko verbunden.",
      bullets: [["Verschluss mit Eigengewebe:", "Bei kleineren Brüchen kann eine offene Operation erfolgen, bei der die Lücke mit dem eigenen Gewebe des Patienten gedeckt wird — leider mit hohem Rezidivrisiko."], ["Verschluss mit Kunststoffnetz:", "Bei vielen Narbenhernien ist die Verstärkung durch ein Netz sinnvoll. Offene Verfahren (PUMP, Sublay, IPOM) oder moderne Schlüssellochtechniken (eTEP, Lap IPOM)."]]
    }]
  }
};
const Bullets = ({
  items
}) => /*#__PURE__*/React.createElement("ul", null, items.map(([strong, rest], i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, /*#__PURE__*/React.createElement("strong", null, strong), " ", rest)));
const DetailPage = ({
  slug,
  onBack
}) => {
  const data = DETAIL_DATA[slug] || DETAIL_DATA.leistenhernie;
  return /*#__PURE__*/React.createElement("section", {
    className: "page active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back-link",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Zur\xFCck zu Hernienarten")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, data.eyebrow), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", null, data.titleA, " "), /*#__PURE__*/React.createElement("em", null, data.titleEm), /*#__PURE__*/React.createElement("span", null, " ", data.titleZ)), data.sections.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("h2", null, s.h), s.intro && /*#__PURE__*/React.createElement("p", null, s.intro), s.bullets && /*#__PURE__*/React.createElement(Bullets, {
    items: s.bullets
  }), s.sub && s.sub.map((sub, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, /*#__PURE__*/React.createElement("h3", null, sub.h), /*#__PURE__*/React.createElement("p", null, sub.p), sub.bullets && /*#__PURE__*/React.createElement(Bullets, {
    items: sub.bullets
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "info-box"
  }, /*#__PURE__*/React.createElement("strong", null, "Hinweis:"), " Diese Informationen ersetzen keine \xE4rztliche Beratung. Sprechen Sie f\xFCr Ihre individuelle Situation mit Ihrem behandelnden Arzt."))));
};
window.DetailPage = DetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/DetailPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/FAQPage.jsx
try { (() => {
// FAQ page — categories + accordion

const FAQ_CATEGORIES = [{
  id: "all",
  label: "Alle Themen"
}, {
  id: "allgemein",
  label: "Allgemein"
}, {
  id: "vor-op",
  label: "Vor der OP"
}, {
  id: "op",
  label: "Operation"
}, {
  id: "nach-op",
  label: "Nachbehandlung"
}, {
  id: "typen",
  label: "Hernientypen"
}, {
  id: "risiko",
  label: "Risiko"
}];
const FAQ_DATA = [{
  cat: "vor-op",
  q: "Wie bereite ich mich auf die Operation vor?",
  a: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "In den Tagen vor der OP kl\xE4ren wir gemeinsam ", /*#__PURE__*/React.createElement("strong", null, "Vorerkrankungen, Medikamente"), " und An\xE4sthesie-Fragen. Eine Stunde vor dem Eingriff sind Sie n\xFCchtern."), /*#__PURE__*/React.createElement("p", null, "Bei Blutverd\xFCnnern besprechen wir das Vorgehen individuell."))
}, {
  cat: "op",
  q: "Wie läuft die Operation ab?",
  a: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Die Wahl des Verfahrens (offen oder minimalinvasiv) h\xE4ngt von ", /*#__PURE__*/React.createElement("strong", null, "Gr\xF6\xDFe und Form des Bruches"), " sowie Ihren pers\xF6nlichen Voraussetzungen ab. Wir orientieren uns an den Leitlinien der europ\xE4ischen Herniengesellschaft."))
}, {
  cat: "op",
  q: "Wie lange dauert die Operation?",
  a: /*#__PURE__*/React.createElement("p", null, "Die meisten Hernieneingriffe dauern ", /*#__PURE__*/React.createElement("strong", null, "30 bis 90 Minuten"), ", je nach Verfahren und Komplexit\xE4t.")
}, {
  cat: "nach-op",
  q: "Wie lange falle ich nach der OP aus?",
  a: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Nach einer minimal-invasiven ", /*#__PURE__*/React.createElement("strong", null, "TEP- oder TAPP-Operation"), " sind die meisten Patienten nach 7\u201314 Tagen wieder im Alltag belastbar."), /*#__PURE__*/React.createElement("p", null, "Belastungssport in der Regel nach 4\u20136 Wochen."))
}, {
  cat: "nach-op",
  q: "Wann darf ich wieder Sport treiben?",
  a: /*#__PURE__*/React.createElement("p", null, "Leichte Bewegung ist nach wenigen Tagen erlaubt. ", /*#__PURE__*/React.createElement("strong", null, "Belastungssport in der Regel nach 4\u20136 Wochen"), ", je nach Verfahren.")
}, {
  cat: "risiko",
  q: "Welche Risiken bestehen?",
  a: /*#__PURE__*/React.createElement("p", null, "Wie bei jedem Eingriff gibt es allgemeine Operationsrisiken sowie spezifische Risiken \u2014 z. B. Wundheilungsst\xF6rungen, chronische Schmerzen oder ein Rezidiv. Diese besprechen wir vorab individuell.")
}];
const FAQItem = ({
  item,
  open,
  onToggle
}) => /*#__PURE__*/React.createElement("div", {
  className: "faq-item" + (open ? " open" : "")
}, /*#__PURE__*/React.createElement("button", {
  className: "faq-q",
  onClick: onToggle
}, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
  className: "faq-icon"
}, "+")), open && /*#__PURE__*/React.createElement("div", {
  className: "faq-a-inner"
}, item.a));
const FAQPage = () => {
  const [active, setActive] = React.useState("all");
  const [openIds, setOpenIds] = React.useState({
    0: true
  });
  const visible = active === "all" ? FAQ_DATA : FAQ_DATA.filter(d => d.cat === active);
  return /*#__PURE__*/React.createElement("section", {
    className: "page active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "H\xE4ufig gestellte Fragen"), /*#__PURE__*/React.createElement("h2", null, "Antworten auf Ihre ", /*#__PURE__*/React.createElement("em", null, "medizinischen"), " Fragen."), /*#__PURE__*/React.createElement("p", null, "\xDCbersichtlich nach Themen geordnet \u2014 auf der Basis aktueller Leitlinien und langj\xE4hriger klinischer Erfahrung.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-categories"
  }, FAQ_CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: "cat-pill" + (active === c.id ? " active" : ""),
    onClick: () => setActive(c.id)
  }, c.label))), /*#__PURE__*/React.createElement("h3", {
    className: "faq-section-title"
  }, FAQ_CATEGORIES.find(c => c.id === active)?.label), /*#__PURE__*/React.createElement("div", null, visible.map((item, i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: i,
    item: item,
    open: !!openIds[i],
    onToggle: () => setOpenIds(o => ({
      ...o,
      [i]: !o[i]
    }))
  })))));
};
window.FAQPage = FAQPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/FAQPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Footer.jsx
try { (() => {
// Site footer

const Footer = ({
  onNavigate
}) => /*#__PURE__*/React.createElement("footer", {
  className: "site-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo.png",
  alt: "OC | OrthoChirurgie"
}), /*#__PURE__*/React.createElement("p", null, "Praxis f\xFCr Orthop\xE4die und Chirurgie. Zertifiziertes Hernienzentrum mit zwei Standorten in Ludwigshafen-Friesenheim und Mutterstadt.")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Navigation"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("home")
}, "Start"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("about")
}, "\xDCber mich"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("types")
}, "Hernienarten"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("faq")
}, "FAQ"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("contact")
}, "Kontakt")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Rechtliches"), /*#__PURE__*/React.createElement("a", {
  onClick: () => onNavigate("imprint")
}, "Impressum"), /*#__PURE__*/React.createElement("p", null, "info@oc-orthochirurgie.com"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bottom"
}, "\xA9 2026 OC | OrthoChirurgie. Alle Rechte vorbehalten.")));
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Header.jsx
try { (() => {
// Header with brand, top nav, lang switcher
const Header = ({
  page,
  onNavigate,
  lang,
  onLang
}) => {
  const navItems = [{
    id: "home",
    de: "Start",
    en: "Home"
  }, {
    id: "about",
    de: "Über mich",
    en: "About"
  }, {
    id: "types",
    de: "Hernienarten",
    en: "Hernia types"
  }, {
    id: "faq",
    de: "FAQ",
    en: "FAQ"
  }, {
    id: "contact",
    de: "Kontakt",
    en: "Contact"
  }, {
    id: "imprint",
    de: "Impressum",
    en: "Imprint"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    onClick: () => onNavigate("home"),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "OC | OrthoChirurgie"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-tag"
  }, "Hernienzentrum")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-main"
  }, navItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    className: "nav-link" + (page === item.id ? " active" : ""),
    onClick: () => onNavigate(item.id)
  }, item[lang] || item.de))), /*#__PURE__*/React.createElement("div", {
    className: "lang-switch",
    role: "group",
    "aria-label": "Sprache"
  }, ["de", "en", "ar", "tr"].map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    className: lang === code ? "active" : "",
    onClick: () => onLang(code)
  }, code === "ar" ? "عربي" : code.toUpperCase())))));
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HerniaTypesPage.jsx
try { (() => {
// Hernia types grid page

const HERNIA_TYPES = [{
  name: "Leistenhernie",
  icon: "cross",
  desc: "Bei einem Leistenbruch drücken sich Eingeweide durch eine natürliche Schwachstelle der Bauchwand direkt in den Leistenkanal. Der häufigste Bruch — vor allem bei Männern.",
  therapy: "TEP, TAPP, Lichtenstein. Netzfrei bei kleineren Brüchen."
}, {
  name: "Nabelhernie",
  icon: "dot",
  desc: "Schwachstelle im Bereich des Nabels. Oft sicht- und tastbare Vorwölbung. Kann angeboren oder durch erhöhten Druck erworben sein.",
  therapy: "Netzfrei oder Netz (PUMP, MILOS, IPOM, eTEP, Lap IPOM)."
}, {
  name: "Narbenhernie",
  icon: "file",
  desc: "Bruch im Bereich einer früheren Operationsnarbe. Eigengewebe ist dort geschwächt; Druck im Bauchraum begünstigt die Entstehung.",
  therapy: "In der Regel Netzverfahren (Sublay, PUMP, eTEP, Lap IPOM)."
}, {
  name: "Epigastrische Hernie",
  icon: "snow",
  desc: "Oberbauch-Hernie zwischen Schwertfortsatz und Nabel — in der Mittellinie der Bauchwand (Linea alba).",
  therapy: "Meist offener Verschluss mit Netz oder Direktnaht."
}];
const HerniaCard = ({
  type,
  onOpen
}) => /*#__PURE__*/React.createElement("article", {
  className: "hernia-card",
  onClick: onOpen
}, /*#__PURE__*/React.createElement("div", {
  className: "hernia-card-icon"
}, /*#__PURE__*/React.createElement(Icon, {
  name: type.icon,
  size: 26,
  strokeWidth: 1.8
})), /*#__PURE__*/React.createElement("h3", null, type.name), /*#__PURE__*/React.createElement("p", null, type.desc), /*#__PURE__*/React.createElement("span", {
  className: "therapy-label"
}, "Behandlung"), /*#__PURE__*/React.createElement("p", {
  className: "therapy-text"
}, type.therapy));
const HerniaTypesPage = ({
  onOpenDetail
}) => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-eyebrow"
}, "\xDCbersicht"), /*#__PURE__*/React.createElement("h2", null, "Welche ", /*#__PURE__*/React.createElement("em", null, "Hernienarten"), " gibt es?"), /*#__PURE__*/React.createElement("p", null, "Hernien k\xF6nnen an verschiedenen Stellen der Bauchwand auftreten. Hier finden Sie eine \xDCbersicht der h\xE4ufigsten Formen.")), /*#__PURE__*/React.createElement("div", {
  className: "hernia-grid"
}, HERNIA_TYPES.map(t => /*#__PURE__*/React.createElement(HerniaCard, {
  key: t.name,
  type: t,
  onOpen: () => onOpenDetail(t.name)
})))));
window.HerniaTypesPage = HerniaTypesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HerniaTypesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HomePage.jsx
try { (() => {
// Home page — hero + search + shortcuts + trust strip

const FAQ_INDEX = [{
  cat: "Operation",
  q: "Wie lange falle ich nach der OP aus?",
  snippet: "Nach einer minimal-invasiven TEP- oder TAPP-Operation sind die meisten Patienten nach 7–14 Tagen wieder im Alltag belastbar."
}, {
  cat: "Allgemein",
  q: "Was ist ein Leistenbruch genau?",
  snippet: "Bei einem Leistenbruch drücken sich Eingeweide durch eine natürliche Schwachstelle der Bauchwand in den Leistenkanal."
}, {
  cat: "Risiko",
  q: "Welche Risiken bestehen bei einer Hernien-OP?",
  snippet: "Wie bei jedem Eingriff gibt es allgemeine Operationsrisiken sowie spezifische Risiken — diese besprechen wir individuell."
}, {
  cat: "Nachbehandlung",
  q: "Wann darf ich wieder Sport treiben?",
  snippet: "Leichte Bewegung ist nach wenigen Tagen erlaubt. Belastungssport in der Regel nach 4–6 Wochen, je nach Verfahren."
}, {
  cat: "Hernientypen",
  q: "Was unterscheidet TEP von TAPP?",
  snippet: "Beides sind Schlüsselloch-Verfahren. Bei TAPP geht der Chirurg in den Bauchraum, bei TEP bleibt er außerhalb."
}];
const SearchResults = ({
  query,
  onPick
}) => {
  if (!query.trim()) return null;
  const q = query.toLowerCase();
  const results = FAQ_INDEX.filter(r => r.q.toLowerCase().includes(q) || r.snippet.toLowerCase().includes(q));
  return /*#__PURE__*/React.createElement("div", {
    className: "search-results",
    style: {
      display: "block"
    }
  }, results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px",
      textAlign: "center",
      color: "var(--ink-mute)",
      fontSize: 14
    }
  }, "Keine Ergebnisse f\xFCr \u201E", query, "\".") : results.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "search-result",
    onClick: () => onPick(r)
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-cat"
  }, r.cat), /*#__PURE__*/React.createElement("div", {
    className: "res-q"
  }, r.q), /*#__PURE__*/React.createElement("div", {
    className: "res-snippet"
  }, r.snippet))));
};
const Hero = ({
  onNavigate
}) => {
  const [query, setQuery] = React.useState("");
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Zertifiziertes Hernienzentrum OC | OrthoChirurgie")), /*#__PURE__*/React.createElement("h1", null, "Ihre Fragen zur ", /*#__PURE__*/React.createElement("em", null, "Hernie"), " beantwortet."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Stellen Sie Ihre Frage \u2014 unser Assistent durchsucht alle medizinischen Informationen und f\xFChrt Sie direkt zur richtigen Antwort."), /*#__PURE__*/React.createElement("div", {
    className: "searchbox"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    style: {
      color: "var(--ink-mute)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    autoComplete: "off",
    placeholder: "z.B. \u201EWie lange falle ich nach der OP aus?\"",
    value: query,
    onChange: e => setQuery(e.target.value)
  }), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("span", null, "Suchen"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement(SearchResults, {
    query: query,
    onPick: () => {
      setQuery("");
      onNavigate("faq");
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle",
    size: 14,
    style: {
      color: "var(--warn)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Diese Informationen ersetzen keine \xE4rztliche Beratung.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-shortcuts"
  }, /*#__PURE__*/React.createElement("button", {
    className: "shortcut",
    onClick: () => onNavigate("faq")
  }, /*#__PURE__*/React.createElement("span", {
    className: "shortcut-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pre",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "shortcut-text"
  }, "Vor der Operation")), /*#__PURE__*/React.createElement("button", {
    className: "shortcut",
    onClick: () => onNavigate("faq")
  }, /*#__PURE__*/React.createElement("span", {
    className: "shortcut-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "shortcut-text"
  }, "Nach der OP")), /*#__PURE__*/React.createElement("button", {
    className: "shortcut",
    onClick: () => onNavigate("types")
  }, /*#__PURE__*/React.createElement("span", {
    className: "shortcut-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cross",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "shortcut-text"
  }, "Hernienarten")), /*#__PURE__*/React.createElement("button", {
    className: "shortcut",
    onClick: () => onNavigate("contact")
  }, /*#__PURE__*/React.createElement("span", {
    className: "shortcut-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "shortcut-text"
  }, "Praxis kontaktieren")))));
};
const TrustStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "trust-strip"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "trust-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "trust-item"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/dhg-siegel.png",
  alt: "DHG Siegel"
}), /*#__PURE__*/React.createElement("div", {
  className: "trust-item-text"
}, /*#__PURE__*/React.createElement("strong", null, "DHG-zertifiziertes Hernienzentrum"), /*#__PURE__*/React.createElement("span", null, "Qualit\xE4tsgesicherte Hernienchirurgie"))), /*#__PURE__*/React.createElement("div", {
  className: "trust-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "icobg teal"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "snow",
  size: 28,
  strokeWidth: 1.6
})), /*#__PURE__*/React.createElement("div", {
  className: "trust-item-text"
}, /*#__PURE__*/React.createElement("strong", null, "\xDCber 1.000 Hernien-Eingriffe"), /*#__PURE__*/React.createElement("span", null, "Erfahrung in offenen & laparoskopischen Verfahren"))), /*#__PURE__*/React.createElement("div", {
  className: "trust-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "icobg navy"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "pin",
  size: 28,
  strokeWidth: 1.6
})), /*#__PURE__*/React.createElement("div", {
  className: "trust-item-text"
}, /*#__PURE__*/React.createElement("strong", null, "2 Standorte in der Region"), /*#__PURE__*/React.createElement("span", null, "Ludwigshafen & Mutterstadt"))))));
const HomePage = ({
  onNavigate
}) => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement(Hero, {
  onNavigate: onNavigate
}), /*#__PURE__*/React.createElement(TrustStrip, null));
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ImprintPage.jsx
try { (() => {
// Impressum (legal imprint)

const ImprintPage = () => /*#__PURE__*/React.createElement("section", {
  className: "page active"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-eyebrow"
}, "Impressum"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontStyle: "normal",
    fontWeight: 400,
    color: "var(--navy-800)"
  }
}, "Impressum")), /*#__PURE__*/React.createElement("div", {
  className: "imprint"
}, /*#__PURE__*/React.createElement("h3", null, "OC | OrthoChirurgie"), /*#__PURE__*/React.createElement("p", null, "\xDCber\xF6rtliche Berufsaus\xFCbungsgemeinschaft f\xFCr Chirurgie und Orthop\xE4die (Gemeinschaftspraxis) in der Rechtsform der Gesellschaft b\xFCrgerlichen Rechts (GbR)"), /*#__PURE__*/React.createElement("h3", null, "Vertreten durch die Gesellschafter"), /*#__PURE__*/React.createElement("p", null, "Solange J\xF6hnk, Irfan Halaceli, Dr. med. Tarek Osman und Dr. med. Jan-Henrik Dieckmann"), /*#__PURE__*/React.createElement("h3", null, "Kontakt"), /*#__PURE__*/React.createElement("p", null, "Berthold-Schwarz-Str. 26, 67063 Ludwigshafen", /*#__PURE__*/React.createElement("br", null), "Tel.: 0621 53399050 (LU) | 06234 9288500 (MU)", /*#__PURE__*/React.createElement("br", null), "E-Mail: ", /*#__PURE__*/React.createElement("a", {
  href: "mailto:info@oc-orthochirurgie.com"
}, "info@oc-orthochirurgie.com")), /*#__PURE__*/React.createElement("h3", null, "Aufsichtsbeh\xF6rde"), /*#__PURE__*/React.createElement("p", null, "Kassen\xE4rztliche Vereinigung Rheinland-Pfalz", /*#__PURE__*/React.createElement("br", null), "Isaac-Fulda-Allee 14", /*#__PURE__*/React.createElement("br", null), "55124 Mainz"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
  href: "https://www.kv-rlp.de",
  target: "_blank",
  rel: "noopener"
}, "www.kv-rlp.de")))));
window.ImprintPage = ImprintPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ImprintPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/kit-icons.jsx
try { (() => {
// Reusable inline SVG icons. All follow the system recipe:
// viewBox 0 0 24 24, fill=none, stroke=currentColor, stroke-width 2 default.

const Icon = ({
  name,
  size = 18,
  strokeWidth = 2,
  style = {}
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    style,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7"
    }),
    arrowLeft: /*#__PURE__*/React.createElement("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    }),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
    }),
    map: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    external: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 3h6v6M10 14 21 3"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 6-10 7L2 6"
    })),
    cal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"
    }),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 11 3 3L22 4"
    })),
    triangle: /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    cross: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    })),
    snow: /*#__PURE__*/React.createElement("path", {
      d: "M12 2v8M12 18v4M4.93 10.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 13.07l5.66-5.66M13.41 10.59l5.66-5.66"
    }),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "11",
      x2: "15",
      y2: "11"
    })),
    pre: /*#__PURE__*/React.createElement("path", {
      d: "M9 11H5a2 2 0 0 0-2 2v7h18v-7a2 2 0 0 0-2-2h-4M9 11V5a3 3 0 1 1 6 0v6M9 11h6"
    }),
    dot: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", props, paths[name]);
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/kit-icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FAQItem = __ds_scope.FAQItem;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.InfoBox = __ds_scope.InfoBox;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.TrustItem = __ds_scope.TrustItem;

})();
