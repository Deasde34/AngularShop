const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "ola",
  });
});
app.all("/stores", (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    res.status(200).send({
      msg: "Tienda creada",
    });
  }
  if (req.method == "GET") {
    res.status(200).send({
      stores: [
        {
          id: 1,
          name: "Park Row at Beekman St",
          address: "38 Park Row",
          city: "New York",
          openingHours: "10:00 - 14:00 and 17:00 - 20:30",
        },
        {
          id: 2,
          name: "Store Alcalá",
          address: "Calle de Alcalá, 21",
          city: "Madrid",
          openingHours: "10:00 - 14:00 and 17:00 - 20:30",
        },
        {
          id: 3,
          name: "Chambers and West Broadway",
          address: "125 Chambers Street",
          city: "New York",
          openingHours: "10:00 - 14:00 and 17:00 - 20:30",
        },
        {
          id: 4,
          name: "Covent Garden - Russell St",
          address: "10 Russell Street",
          city: "London",
          openingHours: "10:00 - 14:00 and 17:00 - 20:30",
        },
        {
          id: 5,
          name: "Monmouth St",
          address: "11 Monmouth Street",
          city: "London",
          openingHours: "10:00 - 14:00 and 17:00 - 20:30",
        },
      ],
    });
  }
});
app.get("/categories", (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    res.status(200).send({
      msg: "categoria creada",
    });
  }
  if (req.method == "GET") {
    res.status(200).send({
      categories: [
        {
          id: 1,
          name: "Books",
        },
        {
          id: 2,
          name: "Electronics",
        },
        {
          id: 3,
          name: "Computers",
        },
      ],
    });
  }
});
app.all("/products", (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    res.status(200).send({
      msg: "producto creado",
    });
  }
  if (req.method == "GET") {
    res.status(200).send([
      {
        id: 1,
        name: "Essential TypeScript 4: From Beginner to Pro",
        price: 45,
        description:
          "Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java.",
        categoryId: 1,
        stock: 0,
      },
      {
        id: 2,
        name: "Hackeando el cerebro de tus compradores: PsychoGrowth",
        price: 5,
        description:
          "En Hackeando del cerebro de tus compradores, Corti nos revela cómo muchas compañías crean productos digitales o procesos de venta capaces de conectar con la psicología del comprador.",
        categoryId: 1,
        stock: 10,
      },
      {
        id: 3,
        name: "Angular Routing: Learn To Create client-side and SPA with Routing and Navigation",
        price: 17,
        description:
          "In this book, the reader will be able to focus on one concept of Angular in deep.",
        categoryId: 1,
        stock: 10,
      },
      {
        id: 4,
        name: "SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter",
        price: 19,
        description:
          "Ideal for Android smartphones and tablets, and MIL cameras. SanDisk Memory Zone app for easy file management (Download and Installation Required).",
        categoryId: 2,
        stock: 10,
      },
      {
        id: 5,
        name: "GoPro HERO9 Black - Waterproof Action Camera with Front LCD",
        price: 399,
        description:
          "5K Video - Shoot stunning video with up to 5K resolution, perfect for maintaining detail even when zooming in",
        categoryId: 2,
        stock: 10,
      },
      {
        id: 6,
        name: "CL3 Rated High-Speed 4K HDMI Cable - 6 Feet",
        price: 7,
        description:
          "HDMI A Male to A Male Cable: Supports Ethernet, 3D, 4K video and Audio Return Channel (ARC)",
        categoryId: 2,
        stock: 10,
      },
      {
        id: 7,
        name: "Logitech MK270 Wireless Keyboard and Mouse Combo",
        price: 32,
        description:
          "The USB receiver is conveniently located in the box, top flap. This wireless keyboard and mouse feature Logitech Advanced 2.4GHz technology with a range of up to 10 metres.",
        categoryId: 3,
        stock: 10,
      },
      {
        id: 8,
        name: "External CD Drive USB 3.0 Portable CD DVD +/-RW Drive DVD/CD ROM",
        price: 20,
        description:
          "Plug & play. Easy to use,powered by USB port. No external driver and Power needed. Just plug it into your USB port and the DVD driver will be detected",
        categoryId: 3,
        stock: 10,
      },
    ]);
  }
  app.get("/orders", (req, res) => {
    if (req.method == "POST") {
      console.log(req.body);
      res.status(200).send({
        msg: "orden generada",
      });
    }
    if (req.method == "GET") {
      res.status(200).send({
        orders: [
          {
            id: 1,
            name: "z",
            date: "01/12/1995",
            shippingAddress: "Av. de la Granvia de Hospitalet, 115",
            city: "Barcelona",
            pickup: true,
          },
        ],
      });
    }
  });
  app.get("/detailsOrders", (req, res) => {
    if (req.method == "POST") {
      console.log(req.body);
      res.status(200).send({
        msg: "detalles generados",
      });
    }
    if (req.method == "GET") {
      res.status(200).send({
        detailsOrders: [
          {
            id: 1,
            orderId: 1,
            quantity: 10,
            productName: "Product name",
          },
        ],
      });
    }
  });
});
