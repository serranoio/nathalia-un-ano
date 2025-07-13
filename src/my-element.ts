import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Boolean })
  isOpen = false;

  render() {
    return html`
      <div class="container">
        <div class="card ${this.isOpen ? 'open' : ''}">
          <div class="card-left">
            <div class="card-content">
              <div class="arcane-symbols">
                <svg class="symbol symbol-1" viewBox="0 0 100 100">
                  <path
                    d="M50 10 L70 30 L70 70 L50 90 L30 70 L30 30 Z"
                    stroke="var(--electric-blue)"
                    fill="none"
                    stroke-width="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    stroke="var(--hot-pink)"
                    fill="none"
                    stroke-width="2"
                  />
                </svg>
                <svg class="symbol symbol-2" viewBox="0 0 100 100">
                  <path
                    d="M20 50 Q50 20 80 50 Q50 80 20 50"
                    stroke="var(--neon-purple)"
                    fill="none"
                    stroke-width="2"
                  />
                  <path
                    d="M35 35 L65 65 M65 35 L35 65"
                    stroke="var(--bright-cyan)"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h1 class="card-title">Nathalia</h1>
              <div class="card-subtitle">Un Año</div>
              <div class="energy-lines">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
              </div>
            </div>
            <div class="expand-button" @click=${this._toggleCard}>
              <span class="button-text"
                >${this.isOpen ? '← Close' : 'Expand →'}</span
              >
            </div>
          </div>
          <div class="card-right">
            <div class="card-content">
              <h2>Happy Anniversary!</h2>
              <p>One year of amazing memories together</p>
              <div class="heart-symbol">
                <svg viewBox="0 0 100 100">
                  <path
                    d="M50 85 C20 65, 5 35, 25 20 C35 10, 55 20, 50 35 C45 20, 65 10, 75 20 C95 35, 80 65, 50 85 Z"
                    fill="var(--hot-pink)"
                    stroke="var(--electric-blue)"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="additional-symbols">
                <svg class="symbol symbol-3" viewBox="0 0 100 100">
                  <path
                    d="M20 20 L80 20 L80 80 L20 80 Z"
                    stroke="var(--electric-blue)"
                    fill="none"
                    stroke-width="2"
                  />
                  <path
                    d="M30 50 L50 30 L70 50 L50 70 Z"
                    stroke="var(--hot-pink)"
                    fill="none"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private _toggleCard() {
    this.isOpen = !this.isOpen;
  }

  static styles = css`
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: radial-gradient(
        ellipse at center,
        var(--dark-bg) 0%,
        var(--darker-bg) 100%
      );
      overflow: hidden;
    }

    .container {
      perspective: 1000px;
      position: relative;
    }

    .card {
      width: 300px;
      height: 450px;
      position: relative;
      transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      box-shadow: 0 20px 40px rgba(0, 191, 255, 0.3),
        0 0 20px rgba(148, 0, 211, 0.2);
      overflow: hidden;
    }

    .card.open {
      width: 600px;
      box-shadow: 0 30px 60px rgba(0, 191, 255, 0.4),
        0 0 30px rgba(148, 0, 211, 0.3);
    }

    .card-left,
    .card-right {
      width: 300px;
      height: 100%;
      position: absolute;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      background: linear-gradient(145deg, var(--dark-bg), var(--darker-bg));
      border: 2px solid transparent;
      overflow: hidden;
    }

    .card-left::before,
    .card-right::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(
        45deg,
        var(--electric-blue),
        var(--hot-pink),
        var(--neon-purple),
        var(--bright-cyan)
      );
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      animation: borderFlow 8s linear infinite;
    }

    @keyframes borderFlow {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .card-left {
      left: 0;
      z-index: 2;
      transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card-right {
      right: -300px;
      transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      z-index: 1;
    }

    .card.open .card-right {
      right: 0;
    }

    .card-right .card-content > * {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .card.open .card-right .card-content > *:nth-child(1) {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.3s;
    }

    .card.open .card-right .card-content > *:nth-child(2) {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.5s;
    }

    .card.open .card-right .card-content > *:nth-child(3) {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.7s;
    }

    .card.open .card-right .card-content > *:nth-child(4) {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.9s;
    }

    .card-content {
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .card-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--electric-blue);
      text-shadow: 0 0 10px var(--electric-blue), 0 0 20px var(--electric-blue),
        0 0 30px var(--electric-blue);
      margin: 20px 0 10px 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 2px;
    }

    .card-subtitle {
      font-size: 1.2rem;
      color: var(--hot-pink);
      text-shadow: 0 0 10px var(--hot-pink);
      margin-bottom: 30px;
      font-style: italic;
    }

    .arcane-symbols {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      padding: 20px;
      opacity: 0.6;
    }

    .symbol {
      width: 60px;
      height: 60px;
      animation: float 3s ease-in-out infinite;
    }

    .symbol-1 {
      animation-delay: 0s;
    }

    .symbol-2 {
      animation-delay: 1.5s;
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(-50px);
      }
      50% {
        transform: translateY(-80px);
      }
    }

    .energy-lines {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      height: 40px;
    }

    .line {
      position: absolute;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--bright-cyan),
        transparent
      );
      animation: energyFlow 6s linear infinite;
    }

    .line-1 {
      top: 0;
      animation-delay: 0s;
    }

    .line-2 {
      top: 15px;
      animation-delay: 0.7s;
    }

    .line-3 {
      top: 30px;
      animation-delay: 1.4s;
    }

    @keyframes energyFlow {
      0% {
        left: -100%;
        width: 0%;
      }
      50% {
        width: 100%;
      }
      100% {
        left: 100%;
        width: 0%;
      }
    }

    .expand-button {
      position: absolute;
      bottom: 20px;
      right: 20px;
      padding: 8px 16px;
      cursor: pointer;
      background: linear-gradient(45deg, var(--hot-pink), var(--electric-blue));
      border-radius: 20px;
      opacity: 0.8;
      transition: all 0.3s ease;
      z-index: 10;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .expand-button:hover {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 20, 147, 0.4);
    }

    .button-text {
      color: white;
      font-size: 0.9rem;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .heart-symbol {
      margin-top: 30px;
    }

    .heart-symbol svg {
      width: 80px;
      height: 80px;
      animation: heartbeat 8s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    .card-right h2 {
      color: var(--hot-pink);
      font-size: 2rem;
      margin-bottom: 20px;
      text-shadow: 0 0 10px var(--hot-pink);
    }

    .card-right p {
      color: var(--electric-blue-light);
      font-size: 1.1rem;
      line-height: 1.6;
      text-shadow: 0 0 5px var(--electric-blue-light);
    }

    .additional-symbols {
      position: absolute;
      bottom: 20px;
      right: 20px;
      opacity: 0.6;
    }

    .additional-symbols .symbol {
      width: 40px;
      height: 40px;
      animation: float 4s ease-in-out infinite;
      animation-delay: 2s;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
