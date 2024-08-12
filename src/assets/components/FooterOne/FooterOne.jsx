import React from "react";
import "./footerone.css";
import { Facebook, Twitter, Linkedin, Globe } from "lucide-react";

export default function FooterOne() {
  return (
    <div className="bg-footer p-7">
      <div
        className=" align-middle text-center justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        id="footerOne"
      >
        <div className="m-2">
          <h3 className="text-3xl p-2 font-bold">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="m-2">
          <h3 className="text-3xl p-2 font-bold">AROUND THE WEB</h3>
          <div className="icons_footer">
            <div className="singleIcon">
              <Facebook />
            </div>
            <div className="singleIcon">
              <Twitter />
            </div>
            <div className="singleIcon">
              <Linkedin />
            </div>
            <div className="singleIcon">
              <Globe />
            </div>
          </div>
        </div>
        <div className="m-2">
          <h3 className="text-3xl p-2 font-bold">ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap <br /> theme created
            by Route
          </p>
        </div>
      </div>
    </div>
  );
}
