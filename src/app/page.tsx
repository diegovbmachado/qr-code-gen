"use client";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { FaUpload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container">
      <section className="title-content">
        <h1 className="page-title">
          Gere e customize <br />
          QR Codes <span>dinâmicos</span>
        </h1>
        <Image
          src="/arrow.svg"
          alt="detail"
          width={150}
          height={150}
          className="arrow-detail"
        />
      </section>
      <section className="featuresqr-code-container">
        <div className="qr-code">
          <div className="link-input">
            <label htmlFor="link">Digite seu link</label>
            <input type="text" id="link" placeholder="Seu link aqui" />
          </div>
          <div className="qr-code-preview">
            <p>QR Code Preview</p>
            <QRCodeCanvas
              value={"https://diegovbmachado.github.io/Landing_page_final/"}
              title={"https://diegovbmachado.github.io/Landing_page_final/"}
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>
        </div>
        <div className="qr-code-customize">
          <div className="customization-container">
            <h3>Cores</h3>
            <div className="input-container colors">
              <div className="input-box">
                <label htmlFor="fgColor">Cor principal</label>
                <input type="color" className="input-color" id="fgColor" />
              </div>
              <div className="input-box">
                <label htmlFor="bgColor">Cor do fundo</label>
                <input type="color" className="input-color" id="bgColor" />
              </div>
            </div>
          </div>
          <div className="customization-container">
            <h3>Logo</h3>
            <div className="input-container">
              <div className="input-box" style={{ position: "relative" }}>
                <label htmlFor="logo">Insira seu logo</label>
                <input
                  type="file"
                  className="input-file"
                  id="logo"
                  accept="image/*"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "40px",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
                <button className="input-file-button" type="button">
                  <FaUpload /> Escolher arquivo
                </button>
              </div>
              <div className="input-box">
                <label htmlFor="logoSize">Tamanho da logo</label>
                <select name="logoSize" id="logoSize">
                  <option value="24">24px x 24px</option>
                  <option value="38">38px x 38px</option>
                  <option value="50">50px x 50px</option>
                </select>
              </div>
            </div>
          </div>
          <button className="download-button">Baixar QR Code</button>
        </div>
      </section>
    </main>
  );
}
