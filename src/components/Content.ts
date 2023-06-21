import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { StateController } from "@lit-app/state";
import { portalState } from "../state/portal-state";
import { keyed } from "lit/directives/keyed.js";
import { localized } from "@lit/localize";
import { theme } from "../utils/theme";

@customElement("bkd-content")
@localized()
export class Content extends LitElement {
  @query("iframe")
  private iframe?: HTMLIFrameElement;

  static styles = [
    theme,
    css`
      /* Large screen */

      :host {
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);
        margin: 0 var(--bkd-header-margin-horizontal);
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
      }

      iframe {
        border: none;
        width: 100%;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `,
  ];

  constructor() {
    super();
    new StateController(this, portalState);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this.handleResize, true);
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.handleResize, true);
    super.disconnectedCallback();
  }

  private handleResize = (event: MessageEvent) => {
    const { height } = event.data;
    if (this.iframe) {
      this.iframe.height = height;
    }
  };

  render() {
    return html`
      <main>
        <h1>${portalState.navigationItem.label}</h1>
        ${keyed(
          portalState.app.root,
          html`<iframe
            id="app"
            title=${portalState.app.key}
            src=${portalState.app.root + portalState.navigationItem.appPath}
          ></iframe>`
        )}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-content": Content;
  }
}
