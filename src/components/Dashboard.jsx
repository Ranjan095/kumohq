import React from "react";
import './STYLE/p23Less.css'
import './STYLE/common.css'
import './STYLE/critical.css'

const Dashboard = () => {
  return (
    <div
      className="p23TextHero module fs-unmask"
      id="593fQsZNqG6Q2tLhwfRfGn"
      data-module-id="p23TextHero"
      data-entry-id="593fQsZNqG6Q2tLhwfRfGn"
      data-context-text="Turn Emails into Revenue"
    >
      <div className="module--content module--content-8of12 align--center">
        <h1 className="h1">Turn Emails into Revenue</h1>
        <p className="copy-large margin--top-3">
          Win new customers with the #1 email marketing and automations
          platform* that recommends ways to get more opens, clicks, and sales.
        </p>

        <div className="flex flex--middle flex--center margin--top-5 p23TextHero--ctaContainer">
          <div className="margin--left-2 margin--right-2">
            <a
              className="ctaPrimary"
              href="/pricing/marketing/"
              aria-label="Sign Up"
              onClick={() => window.tr.clickEvent(this, "e_click")}
              onAuxClick={(event) => {
                if (event.button === 1) {
                  window.tr.clickEvent(this, "e_click");
                }
              }}
              data-onclickmeta='{"category":"hero","action":"click","label":"button:sign up:turn emails into revenue"}'
              data-event-handler="manual"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
