import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { localized, msg } from "@lit/localize";
import bellIcon from "../../assets/icons/bell.svg?raw";
import { DropdownController } from "../../controllers/dropdown.ts";
import { theme } from "../../utils/theme.ts";

@customElement("bkd-notifications-toggle")
@localized()
export class NotificationsToggle extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
      }

      button {
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
      }
    `,
  ];

  private dropdown = new DropdownController(
    this,
    "notifications-toggle",
    "notifications-menu",
  );

  render() {
    return html` <button
        id="notifications-toggle"
        type="button"
        aria-label="${msg("Benachrichtigungen")}"
        @click="${() => this.dropdown.toggle()}"
      >
        ${unsafeHTML(bellIcon)}
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
      ></bkd-notifications-dropdown>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bkd-notifications-toggle": NotificationsToggle;
  }
}
