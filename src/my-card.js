import { LitElement, html, css } from 'lit';

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

  static get styles() {
    return css`
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

  render() {
    return html`
    
<div id="cardlist">
  <div class="wrapper">
  <div class="card">
  <a href="https://hax.psu.edu">
  <button class="btn">details</button></a>
  <h1>Lebron James</h1>
  <p>This is the greatest basketball player to ever exist.</p>
  <img src="https://i1.sndcdn.com/artworks-000116719590-pmrtyu-t500x500.jpg" alt="LeBron" style="width:400px;height:415px;">

  </div>
  </div>
  </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
