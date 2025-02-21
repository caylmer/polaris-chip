import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 

 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "#";
    this.image = "#";
    this.link = "#";
    this.fancy = false;
  }
  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
      margin: 8px;
      border: 5px solid black;
      
    }
    :host([fancy]) .card {
      display: block;
      background-color: yellow;
      border: 5px black;
      box-shadow: 10px 5px 5px red;
      color: red;
}
      .card {
  background-color: orange;
  height: 600px;
  width: 400px;
  border-style: dashed;
  border-width: 10px;
  border-color: brown;
}

h1 {
  text-align: center;
}
p {
  text-align: center;
}
summary {
  text-align: center;
}
.btn {
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 10%;
  padding: 16px 16px 16px 16px;
  margin: 4px 4px 4px 150px;
  text-align: center;
}

.btn:focus,
.btn:hover {
  background-color: green;
}
@media (min-width: 500px) and (max-width: 800px) {
  .card button {
    display: button;
  }
}

@media (max-width: 500px) {
  .card {
    width: 90%;
    padding: 12px;
  }
  .fancy {
  background-color: yellow;
  color: red;
}
  .card button {
    display: none;
  }
}
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  render() {
    return html`
    
<div id="cardlist">
  <div class="wrapper">
    <div class="card">
    <h1 class="cardheader"><b>${this.title}</b></h1>
      <a href=${this.link}>
        <button class="btn">details</button></a>
          <summary>${this.summary}</summary>
          <div>
            <slot>${this.summary}</slot>
          </div>
            <img src=${this.image} alt="LeBron" style="width:400px;height:415px;">
            <details ?open="${this.fancy}" @toggle="${this.openChanged}"></details>

  </div>
  </div>
  </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      summary: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
