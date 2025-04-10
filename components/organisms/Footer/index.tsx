import Image from "next/image";
import Item from "./Item";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                TopupStore membantu untuk
                <br /> mempermudah players dalam bertransaksi
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2025. All Rights Reserved.
                <br />Made By RA
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <Item title="About Us" href="/" />
                    <Item title="Privacy & Policy" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <Item title="Live Chatting" href="/" />
                    <Item title="Refund Policy" href="/" />
                    <Item title="Track Your Transaction" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Information
                  </p>
                  <ul className="list-unstyled">
                    <Item title="@TopupStore" href="/" />
                    <Item title="Topup@gmail.com" href="/" />
                    <Item
                      title="Bekasi, Kota Bekasi"
                      href="https://www.google.com/maps/place/Bekasi"
                    />
                    <Item title="021 - 1331 - 1121" href="/" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
