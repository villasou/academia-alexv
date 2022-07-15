import * as React from "react";
import { Button, Input } from "reactstrap";
import sou from "./images/sou.webp";

export default function Home() {
  return (
    <div className="body">
      <h1>Welcome to Academia Latina</h1>
      <p>Below is a picture of Ashland, Oregon</p>
      <img src={sou} alt="" />

      <p className="mt-4">Here are some basic buttons</p>
      <div>
        <Button color="primary">Click Me</Button>
        <Button color="secondary">Click Me</Button>
        <Button color="warning">Click Me</Button>
        <Button color="success">Click Me</Button>
        <Button color="light">Click Me</Button>
        <Button color="dark">Click Me</Button>
        <Button color="info">Click Me</Button>
        <Button color="danger">Click Me</Button>
      </div>
      <div>
        <p className="mt-4">Here are some link examples</p>
        <div>
          <a href="/page1">Link to Page 1</a>
        </div>
        <div>
          <a href="/page2" target="_blank">
            Link that opens in a new tab
          </a>
        </div>
      </div>
      <div>
        <p>Here is a text bar example</p>
        <Input name="search" bsSize="lg" placeholder="Search My Website" />
      </div>
    </div>
  );
}
