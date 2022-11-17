import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App-test";
import {customTheme} from './customTheme.js'
// ถ้าไม่ได้ Export default มาให้ destructure ด้วย ถ้า default ใส่ชื่ออะไรก็ได้
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
  </React.StrictMode>
);