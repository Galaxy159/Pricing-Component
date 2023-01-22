import check from "../images/icon-check.svg";
import { useState } from "react";
import useMediaQuery from "./useMediaQuery";

export default function Main() {
  const [rangeValue, setRangeValue] = useState("2");
  const [isYearly, setIsYearly] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 540px)");

  function handleSliderChange(event) {
    setRangeValue(event.target.value);
  }

  function handleToggleChange() {
    setIsYearly((prev) => !prev);
  }

  function pageViews() {
    if (rangeValue === "0") {
      return "10K";
    } else if (rangeValue === "1") {
      return "50K";
    } else if (rangeValue === "2") {
      return "100K";
    } else if (rangeValue === "3") {
      return "500K";
    } else {
      return "1M";
    }
  }

  function price() {
    if (rangeValue === "0") {
      return 8;
    } else if (rangeValue === "1") {
      return 12;
    } else if (rangeValue === "2") {
      return 16;
    } else if (rangeValue === "3") {
      return 24;
    } else {
      return 36;
    }
  }

  return (
    <>
      <style>
        {`.component__data--slider {background: linear-gradient(to right, #a4f3eb 0% ${
          rangeValue * 25
        }%, #ecf0fb 0% 100%);}`}
      </style>
      <div className="component">
        <div className="component__data">
          <p className="component__data--views">{pageViews()} PAGEVIEWS</p>

          <input
            id="range"
            type="range"
            value={rangeValue}
            min="0"
            max="4"
            className="component__data--slider"
            onChange={handleSliderChange}
          />

          <p className="component__data--price">
            <span>${isYearly ? price() * 0.75 : price()}.00</span> /month
          </p>
        </div>
        <div className="component__billing">
          <p className="component__billing--monthly">Monthly Billing</p>
          <div className="component__billing--toggle">
            <label className="switch" htmlFor="toggle">
              <input
                id="toggle"
                type="checkbox"
                onChange={handleToggleChange}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <p className="component__billing--yearly">Yearly Billing</p>
          <p className="component__billing--discount">
            -25%{isDesktop ? " discount" : ""}
          </p>
        </div>
        <div className="component__cta">
          <div className="component__features">
            <div className="component__features--feature">
              <img
                src={check}
                alt="&#10004;"
                className="component__features--feature-img"
              />
              <p className="component__features--feature-text">
                Unlimited websites
              </p>
            </div>
            <div className="component__features--feature">
              <img
                src={check}
                alt="&#10004;"
                className="component__features--feature-img"
              />
              <p className="component__features--feature-text">
                100% data ownership
              </p>
            </div>
            <div className="component__features--feature">
              <img
                src={check}
                alt="&#10004;"
                className="component__features--feature-img"
              />
              <p className="component__features--feature-text">Email reports</p>
            </div>
          </div>
          <button className="component__cta--btn">Start my trial</button>
        </div>
      </div>
    </>
  );
}
