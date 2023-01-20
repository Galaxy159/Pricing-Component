import check from "../images/icon-check.svg";

export default function Main() {
  return (
    <>
      <div className="component">
        <div className="component__data">
          <p className="component__data--views">100K PAGEVIEWS</p>
          <input type="range" className="component__data--slider" />
          <p className="component__data--price">
            <span>$16.00</span> /month
          </p>
        </div>
        <div className="component__billing">
          <p className="component__billing--monthly">Monthly Billing</p>
          <div className="component__billing--toggle"></div>
          <p className="component__billing--yearly">Yearly Billing</p>
          <p className="component__billing--discount"></p>
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
