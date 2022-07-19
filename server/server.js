const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create-party", async (req, res) => {
  const payload = {
    identifierHint: "alice",
    displayName: "alice",
  };

  await axios
    .post("https://adalbbtdikiul3eg.daml.app/v1/query", payload, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRhYmwtYzM0Nzk0ZTktNWFmYy00NGFlLTgzZTktZDk5ZTY2YzEyYmY3In0.eyJpc3MiOiJodWIuZGFtbC5jb20vbG9naW4iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDA2ODg3NDE0MzQwMzcwMDU3MyIsImV4cCI6MTY1ODM0MDQ3MiwianRpIjoiNDY5N2U1NmEtODg0Yy00ZDE4LTgwMGUtMDI3ZTlmMmJlMmI1IiwiaHR0cHM6Ly9kYW1sLmNvbS9sZWRnZXItYXBpIjp7ImFjdEFzIjpbInVzZXJhZG1pbjo6MTIyMDI2NzRjNTc1N2MzNTc1NDg1Mjg0MTIwNDMxY2FmMjNkZGZmODhmZjk1Yzg2ZGE5ZDA1YTNjMWMxOGZmNzU2MzgiXSwiYWRtaW4iOmZhbHNlLCJhcHBsaWNhdGlvbklkIjoiZGFtbGh1YiIsImxlZGdlcklkIjoiYWRhbGJidGRpa2l1bDNlZyIsInBhcnRpY2lwYW50SWQiOm51bGwsInJlYWRBcyI6WyJ1c2VyYWRtaW46OjEyMjAyNjc0YzU3NTdjMzU3NTQ4NTI4NDEyMDQzMWNhZjIzZGRmZjg4ZmY5NWM4NmRhOWQwNWEzYzFjMThmZjc1NjM4Il19LCJodWJDbGFpbXMiOnsibGVkZ2VySWQiOiJhZGFsYmJ0ZGlraXVsM2VnIiwib3duZXIiOiJ1c2VyLWdyYW50LWMyOGU3ZjhhLTBjY2UtNGM2Mi04NmMzLWIwYjBkNDc0ZDFmOSIsInBhcnR5IjoidXNlcmFkbWluOjoxMjIwMjY3NGM1NzU3YzM1NzU0ODUyODQxMjA0MzFjYWYyM2RkZmY4OGZmOTVjODZkYTlkMDVhM2MxYzE4ZmY3NTYzOCIsInBhcnR5TmFtZSI6IlVzZXJBZG1pbiJ9LCJsZWRnZXJJZCI6ImFkYWxiYnRkaWtpdWwzZWciLCJvd25lciI6InVzZXItZ3JhbnQtYzI4ZTdmOGEtMGNjZS00YzYyLTg2YzMtYjBiMGQ0NzRkMWY5IiwicGFydHkiOiJ1c2VyYWRtaW46OjEyMjAyNjc0YzU3NTdjMzU3NTQ4NTI4NDEyMDQzMWNhZjIzZGRmZjg4ZmY5NWM4NmRhOWQwNWEzYzFjMThmZjc1NjM4IiwicGFydHlOYW1lIjoiVXNlckFkbWluIn0.QNGvruDQR7djygb5Y9xO7EHcxCi1sOy4iCVFxs0WCLYmdz3bR4eLlZaUirWGk5RKG3VSLtIQP02AgZRK9d4XvdqU6i_Z7eY7uwFxdKJtYa8nDncSyNMvxhgJgtVOwCSJD-tBmGZqOGPEefYOToIpe2qybqS_WMBEhEj9sGIZL94",
      },
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
