import PrintJS from "print-js";
import axios from "axios";

async function imprimirDocumento(url, payload) {
  await axios({
    url: url,
    method: "POST",
    responseType: "blob",
    data: payload
  })
    .then((response) => {
      if (response.data.type === "application/pdf") {
        let objectUrl = URL.createObjectURL(
          new Blob([response.data], { type: `application/pdf` })
        );
        PrintJS({
          printable: objectUrl,
          type: "pdf"
        });
        return true;
      }
      throw new Error("archivo no pdf resuelto");
    })
    .catch((error) => {
      throw error;
    });
}

export { imprimirDocumento };
