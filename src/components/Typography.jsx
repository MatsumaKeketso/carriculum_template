import React from "react";
/**
 * @param {string} textColor text color
 * @param {string} variant h1-6 (header) | s1-2 (subTitle) | b1-2 (body) | b (button) | c (caption) | o (overline)
 */
function Typography({ children, variant, center = false, textColor = "#000" }) {
  return (
    <div className="wrapper">
      {center ? (
        <p
          style={{ textAlign: "center", color: textColor }}
          className={`${variant}`}
        >
          {children}
        </p>
      ) : (
        <p style={{ color: textColor }} className={`${variant}`}>
          {children}
        </p>
      )}
    </div>
  );
}

export default Typography;
