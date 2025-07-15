import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Boolean })
  isExpanded = false;

  @property({ type: String })
  thankYouMessage = 'Gracias';

  @property({ type: String })
  recipientName = '';

  @property({ type: String })
  senderSignature = '';

  @property({ type: String })
  dateStamp = new Date().toLocaleDateString();

  private handleCardClick() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    return html`
      <div class="card  ${this.isExpanded ? 'expanded' : 'collapsed'}">
        <div class="particles"></div>
        <div class="content-grid">
          <div class="header-section">
            <h1 class="thank-you-header">${this.thankYouMessage}</h1>
            <div class="click-indicator ${this.isExpanded ? 'hidden' : ''}">
              <div class="pulse-ring"></div>
            </div>
          </div>

          <div class="recipient-section">
            ${this.recipientName
              ? html`<div class="recipient">
                  To: <span class="recipient-name">${this.recipientName}</span>
                </div>`
              : ''}
          </div>
          <div class="title-section">
            <h2 class="fecha">07/16/2024</h2>
            <p class="glow">
              Hoy celebramos porque mañana hace un año de clases contigo!
              Aprender es una bendicion, y gracias por estar en mi viaje de
              aprendizaje.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="double-caret"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <path d="M6 8l6 6l6-6" />
                <path d="M6 12l6 6l6-6" />
              </g>
            </svg>
          </div>

          <div class="message-section">
            <div class="primary-message">
              <slot name="message">
                <p class="message-body">
                  Your kindness and support mean the world to me.
                </p>
              </slot>
            </div>

            <div class="additional-text">
              <p class="expanded-message">
                🎆 Cada momento contigo ha sido una explosión de alegría<br />
                ⚡ Tu energía ilumina hasta los días más oscuros<br />
                🌟 Gracias por ser tan auténtica y especial<br />
                💙 Este año ha sido increíble gracias a ti
              </p>
            </div>

            <div class="memory-highlights">
              <div class="memory-item">
                <span class="memory-title">Aventuras Favoritas:</span>
                <span class="memory-desc"
                  >Esas risas que no pueden contenerse</span
                >
              </div>
              <div class="memory-item">
                <span class="memory-title">Momentos Únicos:</span>
                <span class="memory-desc"
                  >Conversaciones hasta altas horas</span
                >
              </div>
              <div class="memory-item">
                <span class="memory-title">Tu Magia:</span>
                <span class="memory-desc"
                  >Convertir lo ordinario en extraordinario</span
                >
              </div>
            </div>
          </div>

          <div class="signature-section">
            ${this.senderSignature
              ? html`<div class="signature">
                  From: <span class="sender-name">${this.senderSignature}</span>
                </div>`
              : ''}
          </div>

          <div class="date-section">
            <div class="date-stamp">${this.dateStamp}</div>
            ${this.isExpanded
              ? html`<div class="celebration-text">¡Un año increíble! 🎉</div>`
              : ''}
          </div>
        </div>

        <div class="decorative-elements">
          <div class="hex-frame"></div>
          <div class="angular-border"></div>
          ${this.isExpanded
            ? html`
                <div class="extra-particles">
                  <div class="spark spark-1"></div>
                  <div class="spark spark-2"></div>
                  <div class="spark spark-3"></div>
                </div>
              `
            : ''}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      /* Jinx Color Palette - Primary Colors */
      --primary: #00bfff; /* Electric Blue */
      --primary-light: #40d4ff;
      --primary-dark: #0099cc;

      --secondary: #ff69b4; /* Hot Pink */
      --secondary-light: #ff85c1;
      --secondary-dark: #e6459a;

      --accent: #9400d3; /* Neon Purple */
      --accent-light: #b347e6;
      --accent-dark: #7a00b3;

      --highlight: #00ffff; /* Bright Cyan */
      --highlight-light: #33ffff;
      --highlight-dark: #00cccc;

      /* Background Colors */
      --dark-bg: #1a1a1a;
      --darker-bg: #0d0d0d;

      /* Text Colors */
      --text-primary: #ffffff;
      --text-muted: #cccccc;

      display: block;
      width: 100%;
      height: 100vh;
      background: linear-gradient(
        135deg,
        var(--darker-bg) 0%,
        var(--dark-bg) 100%
      );
      overflow: hidden;
      position: relative;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(
          circle at 25% 25%,
          rgba(255, 255, 255, 0.02) 1px,
          transparent 1px
        ),
        radial-gradient(
          circle at 75% 75%,
          rgba(255, 255, 255, 0.01) 1px,
          transparent 1px
        );
      background-size: 3px 3px, 5px 5px;
      opacity: 0.5;
      pointer-events: none;
    }

    @keyframes jump {
      0%,
      100% {
        transform: translateY(-5px) scale(1.01);
        text-shadow: 0 0 12px var(--secondary-light);
      }
      50% {
        transform: translateY(0) scale(0.99);
        text-shadow: 0 0 6px var(--secondary);
        /* text-shadow: 0 0 4px var(--secondary-light), 0 0 6px var(--secondary), */
      }
    }

    .title-section {
      position: relative;
    }

    .card {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-areas:
        'header header decorative'
        'recipient recipient decorative'
        'message message decorative'
        'signature date decorative';
      grid-template-columns: 1.5fr 1.5fr 1fr;
      grid-template-rows: auto auto 1fr auto;
      /* gap: 2rem; */
      padding: 3rem;
      position: relative;
      transform-origin: center;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .card.expanded {
      transform: scale(1.02);
      filter: brightness(1.1);
    }

    .card.closed {
      transform: scale(0.95) rotateY(-5deg);
      opacity: 0.8;
    }

    .card.open {
      transform: scale(1) rotateY(0deg);
      opacity: 1;
    }

    .content-grid {
      display: contents;
    }

    .header-section {
      grid-area: header;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }

    .click-indicator {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    .click-indicator.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .glow {
      color: var(--text-primary);
      text-shadow: 0 0 5px var(--text-muted);
      animation: glow 6s ease-in-out infinite;
      font-size: 20px;
      line-height: 1.75;
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 5px var(--text-muted);
      }
      100% {
        text-shadow: 0 0 4px var(--text-muted);
      }
    }

    .click-text {
      font-size: 0.9rem;
      color: var(--highlight);
      font-weight: bold;
      text-shadow: 0 0 5px var(--highlight-light);
    }

    .pulse-ring {
      width: 20px;
      height: 20px;
      border: 2px solid var(--highlight);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 5px var(--highlight);
      }
      50% {
        transform: scale(1.2);
        box-shadow: 0 0 15px var(--highlight), 0 0 25px var(--highlight-light);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 5px var(--highlight);
      }
    }

    .thank-you-header {
      font-family: 'Arial Black', sans-serif;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0;
      text-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary-light),
        0 0 30px var(--primary), 0 0 40px var(--primary-dark);
      transform: skew(-5deg);
      animation: headerPulse 3s ease-in-out infinite;
    }

    @keyframes headerPulse {
      0%,
      100% {
        text-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary-light),
          0 0 30px var(--primary), 0 0 40px var(--primary-dark);
      }
      50% {
        text-shadow: 0 0 15px var(--primary-light), 0 0 25px var(--primary),
          0 0 35px var(--primary-light), 0 0 45px var(--primary);
      }
    }

    .recipient-section {
      grid-area: recipient;
      display: flex;
      align-items: center;
    }

    .recipient {
      font-family: 'Arial', sans-serif;
      font-size: 1.2rem;
      color: var(--text-muted);
    }

    .recipient-name {
      color: var(--secondary);
      font-weight: bold;
      text-shadow: 0 0 10px var(--secondary-light);
    }

    .message-section {
      padding-top: 5rem;
      padding-right: 2rem;
      grid-area: message;

      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-column: 2;
      filter: blur(5px); /* Apply blur effect */
      position: relative; /* Position for the arrow */
      transition: filter 0.5s ease; /* Smooth transition for blur removal */
    }

    @keyframes softBounceGlow {
      0%,
      100% {
        transform: translateY(-8px) scale(2.1);
        text-shadow: 0 0 15px var(--secondary-light), 0 0 25px var(--secondary);
      }
      50% {
        transform: translateY(0) scale(2);
        text-shadow: 0 0 10px var(--secondary-light), 0 0 20px var(--secondary);
      }
    }

    .double-caret {
      animation: softBounceGlow 3s ease-in-out infinite;
      position: absolute;
      left: 90%;
      top: 50%;
    }

    @keyframes caretBounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(5px);
      }
    }

    .arrow {
      content: '↓'; /* Downward arrow */
      position: absolute;
      top: 0rem; /* Position above the section */
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      color: var(--text-muted);
      animation: arrowBounce 1.5s infinite; /* Arrow bounce animation */
    }

    .message-section:hover {
      filter: none; /* Remove blur effect */
    }

    @keyframes arrowBounce {
      0%,
      100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(10px); /* Move down */
      }
    }

    /* Custom scrollbar styling */
    .message-section::-webkit-scrollbar {
      width: 12px; /* Width of the scrollbar */
    }

    .message-section::-webkit-scrollbar-track {
      background: var(--dark-bg); /* Background of the scrollbar track */
      border-radius: 10px; /* Rounded corners */
    }

    .message-section::-webkit-scrollbar-thumb {
      background: linear-gradient(
        135deg,
        var(--primary-light),
        var(--accent-light)
      ); /* Vibrant gradient for the scrollbar thumb */
      border-radius: 10px; /* Rounded corners */
      box-shadow: 0 0 10px var(--primary-light); /* Glow effect */
    }

    .message-section::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(
        135deg,
        var(--primary),
        var(--accent)
      ); /* Slightly darker gradient on hover */
      box-shadow: 0 0 15px var(--accent-light); /* Enhanced glow effect */
    }

    .fecha {
      color: var(--secondary);
      font-weight: bold;
      text-shadow: 0 0 10px var(--secondary-light);
      animation: jump 3s ease-in-out infinite;
      transform-origin: center;
    }

    .primary-message {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .message-body {
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      line-height: 1.6;
      color: var(--text-primary);
      text-align: center;
      margin: 0;
    }

    .expanded-content {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .expanded-content.visible {
      max-height: 500px;
      opacity: 1;
      transform: translateY(0);
    }

    .additional-text {
      margin: 2rem 0;
      padding: 1.5rem;
      background: rgba(148, 0, 211, 0.1);
      border: 1px solid var(--accent);
      border-radius: 10px;
      box-shadow: 0 0 15px var(--accent-dark),
        inset 0 0 15px rgba(148, 0, 211, 0.2);
    }

    .expanded-message {
      font-family: 'Arial', sans-serif;
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-primary);
      text-align: center;
      margin: 0;
    }

    .memory-highlights {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .memory-item {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: rgba(0, 191, 255, 0.05);
      border-left: 3px solid var(--primary);
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .memory-item:hover {
      background: rgba(0, 191, 255, 0.1);
      border-left-color: var(--primary-light);
      transform: translateX(10px);
    }

    .memory-title {
      font-weight: bold;
      color: var(--secondary);
      font-size: 1.1rem;
      text-shadow: 0 0 5px var(--secondary-light);
      margin-bottom: 0.3rem;
    }

    .memory-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      font-style: italic;
    }

    .signature-section {
      grid-area: signature;
      display: flex;
      align-items: center;
    }

    .signature {
      font-family: 'Arial', sans-serif;
      font-size: 1.1rem;
      color: var(--text-muted);
    }

    .sender-name {
      color: var(--accent);
      font-weight: bold;
      text-shadow: 0 0 8px var(--accent-light);
    }

    .date-section {
      grid-area: date;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .date-stamp {
      font-family: 'Arial', sans-serif;
      font-size: 1rem;
      color: var(--highlight);
      text-shadow: 0 0 5px var(--highlight-light);
    }

    .celebration-text {
      font-family: 'Arial', sans-serif;
      font-size: 1.1rem;
      color: var(--secondary);
      font-weight: bold;
      text-shadow: 0 0 10px var(--secondary-light);
      margin-top: 0.5rem;
      animation: celebrationGlow 2s ease-in-out infinite alternate;
    }

    @keyframes celebrationGlow {
      0% {
        text-shadow: 0 0 10px var(--secondary-light);
        transform: scale(1);
      }
      100% {
        text-shadow: 0 0 20px var(--secondary), 0 0 30px var(--secondary-light);
        transform: scale(1.05);
      }
    }

    .decorative-elements {
      grid-area: decorative;
      position: relative;
      height: 100%;
    }

    .hex-frame {
      position: absolute;
      top: 20%;
      right: 10%;
      width: 120px;
      height: 120px;
      border: 3px solid var(--accent);
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      box-shadow: 0 0 15px var(--accent), inset 0 0 15px var(--accent-light);
      animation: hexRotate 8s linear infinite;
    }

    @keyframes hexRotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .angular-border {
      position: absolute;
      bottom: 20%;
      right: 20%;
      width: 80px;
      height: 80px;
      border: 2px solid var(--secondary);
      transform: rotate(45deg);
      box-shadow: 0 0 10px var(--secondary),
        inset 0 0 10px var(--secondary-light);
      animation: borderPulse 2s ease-in-out infinite alternate;
    }

    @keyframes borderPulse {
      0% {
        border-color: var(--secondary);
        box-shadow: 0 0 10px var(--secondary),
          inset 0 0 10px var(--secondary-light);
      }
      100% {
        border-color: var(--secondary-light);
        box-shadow: 0 0 20px var(--secondary-light),
          inset 0 0 20px var(--secondary);
      }
    }

    .particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .particles::before,
    .particles::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .particles::before {
      background: var(--highlight);
      top: 20%;
      left: 10%;
      box-shadow: 0 0 10px var(--highlight);
      animation-delay: 0s;
    }

    .particles::after {
      background: var(--primary);
      top: 60%;
      right: 15%;
      box-shadow: 0 0 10px var(--primary);
      animation-delay: 3s;
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.7;
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 1;
      }
    }

    .extra-particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      animation: fadeInExplosion 0.8s ease-out;
    }

    @keyframes fadeInExplosion {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .spark {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      animation: sparkle 1.5s ease-in-out infinite;
    }

    .spark-1 {
      background: var(--secondary);
      top: 30%;
      left: 20%;
      box-shadow: 0 0 10px var(--secondary);
      animation-delay: 0s;
    }

    .spark-2 {
      background: var(--accent);
      top: 70%;
      left: 30%;
      box-shadow: 0 0 10px var(--accent);
      animation-delay: 0.5s;
    }

    .spark-3 {
      background: var(--highlight);
      top: 50%;
      right: 25%;
      box-shadow: 0 0 10px var(--highlight);
      animation-delay: 1s;
    }

    @keyframes sparkle {
      0%,
      100% {
        transform: scale(1);
        opacity: 0.8;
      }
      25% {
        transform: scale(1.5);
        opacity: 1;
      }
      50% {
        transform: scale(0.8);
        opacity: 0.6;
      }
      75% {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    :host(:hover) .thank-you-header {
      color: var(--primary-light);
      text-shadow: 0 0 15px var(--primary-light), 0 0 25px var(--primary),
        0 0 35px var(--primary-light), 0 0 45px var(--primary);
    }

    @media (max-width: 768px) {
      .card {
        grid-template-areas:
          'header'
          'recipient'
          'message'
          'signature'
          'date'
          'decorative';
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto auto auto;
        padding: 2rem;
        gap: 1.5rem;
      }

      .thank-you-header {
        font-size: clamp(2rem, 10vw, 4rem);
      }

      .decorative-elements {
        height: 150px;
      }

      .click-indicator {
        position: relative;
        margin-top: 1rem;
        justify-content: center;
      }

      .memory-highlights {
        gap: 0.8rem;
      }

      .memory-item {
        padding: 0.8rem;
      }

      .expanded-content.visible {
        max-height: 600px;
      }
    }
  `;
}
