import React from "react";
import ReactDOM from "react-dom";
import MyDocument from "../components/reactpdf";
import { PDFViewer } from "@react-pdf/renderer";

const pembayaran = () => {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};

export default pembayaran;
