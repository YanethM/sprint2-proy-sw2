import React, { useState } from "react";

const GeneradorProductos = () => {
  const [generando, setGenerando] = useState(false);
  const [generado, setGenerado] = useState(false);
  const [estadisticas, setEstadisticas] = useState(null);

  const categorias = {
    Electrónicos: [
      {
        nombre: 'Televisor LED 55"',
        sku_prefix: "ELE-TV",
        precio_min: 1200000,
        precio_max: 2500000,
        peso_min: 15,
        peso_max: 25,
        dimensiones: "55x33x8",
        fragil: true,
      },
      {
        nombre: 'Smart TV 65"',
        sku_prefix: "ELE-TV",
        precio_min: 2000000,
        precio_max: 4000000,
        peso_min: 20,
        peso_max: 30,
        dimensiones: "65x40x10",
        fragil: true,
      },
      {
        nombre: "Parlantes Bluetooth",
        sku_prefix: "ELE-PAR",
        precio_min: 150000,
        precio_max: 800000,
        peso_min: 1,
        peso_max: 5,
        dimensiones: "20x15x15",
        fragil: true,
      },
      {
        nombre: "Auriculares Gaming",
        sku_prefix: "ELE-AUR",
        precio_min: 80000,
        precio_max: 500000,
        peso_min: 0.3,
        peso_max: 0.8,
        dimensiones: "25x20x10",
        fragil: true,
      },
      {
        nombre: "Cámara Digital",
        sku_prefix: "ELE-CAM",
        precio_min: 600000,
        precio_max: 3000000,
        peso_min: 0.5,
        peso_max: 2,
        dimensiones: "15x10x8",
        fragil: true,
      },
    ],
    Electrodomésticos: [
      {
        nombre: "Refrigerador No Frost",
        sku_prefix: "ELC-REF",
        precio_min: 1800000,
        precio_max: 4000000,
        peso_min: 60,
        peso_max: 90,
        dimensiones: "70x180x70",
        fragil: true,
      },
      {
        nombre: "Lavadora Automática",
        sku_prefix: "ELC-LAV",
        precio_min: 1200000,
        precio_max: 3000000,
        peso_min: 45,
        peso_max: 70,
        dimensiones: "60x100x60",
        fragil: true,
      },
      {
        nombre: "Microondas",
        sku_prefix: "ELC-MIC",
        precio_min: 200000,
        precio_max: 800000,
        peso_min: 15,
        peso_max: 25,
        dimensiones: "50x35x40",
        fragil: true,
      },
      {
        nombre: "Licuadora",
        sku_prefix: "ELC-LIC",
        precio_min: 80000,
        precio_max: 350000,
        peso_min: 2,
        peso_max: 5,
        dimensiones: "25x20x35",
        fragil: true,
      },
      {
        nombre: "Plancha de Vapor",
        sku_prefix: "ELC-PLA",
        precio_min: 60000,
        precio_max: 200000,
        peso_min: 1,
        peso_max: 3,
        dimensiones: "30x15x15",
        fragil: true,
      },
    ],
    Computación: [
      {
        nombre: 'Laptop Ultraligera 14"',
        sku_prefix: "COM-LAP",
        precio_min: 2500000,
        precio_max: 6000000,
        peso_min: 1,
        peso_max: 2,
        dimensiones: "34x24x2",
        fragil: true,
      },
      {
        nombre: "PC Escritorio Gaming",
        sku_prefix: "COM-PC",
        precio_min: 2000000,
        precio_max: 8000000,
        peso_min: 8,
        peso_max: 15,
        dimensiones: "45x20x40",
        fragil: true,
      },
      {
        nombre: "Tableta Gráfica",
        sku_prefix: "COM-TAB",
        precio_min: 300000,
        precio_max: 1500000,
        peso_min: 0.5,
        peso_max: 1,
        dimensiones: "38x25x1",
        fragil: true,
      },
      {
        nombre: 'Monitor 27"',
        sku_prefix: "COM-MON",
        precio_min: 800000,
        precio_max: 3000000,
        peso_min: 5,
        peso_max: 10,
        dimensiones: "60x40x8",
        fragil: true,
      },
      {
        nombre: "Teclado Mecánico",
        sku_prefix: "COM-TEC",
        precio_min: 150000,
        precio_max: 600000,
        peso_min: 0.8,
        peso_max: 1.5,
        dimensiones: "45x15x3",
        fragil: true,
      },
    ],
    Telefonía: [
      {
        nombre: "Smartphone Premium",
        sku_prefix: "TEL-SPH",
        precio_min: 1500000,
        precio_max: 4500000,
        peso_min: 0.15,
        peso_max: 0.25,
        dimensiones: "16x7x1",
        fragil: true,
      },
      {
        nombre: 'Tablet 10"',
        sku_prefix: "TEL-TAB",
        precio_min: 800000,
        precio_max: 2500000,
        peso_min: 0.4,
        peso_max: 0.7,
        dimensiones: "25x17x1",
        fragil: true,
      },
      {
        nombre: "Smartwatch",
        sku_prefix: "TEL-SWT",
        precio_min: 300000,
        precio_max: 1200000,
        peso_min: 0.05,
        peso_max: 0.15,
        dimensiones: "5x5x1",
        fragil: true,
      },
      {
        nombre: "Funda Protectora",
        sku_prefix: "TEL-FUN",
        precio_min: 15000,
        precio_max: 80000,
        peso_min: 0.05,
        peso_max: 0.2,
        dimensiones: "17x8x1",
        fragil: false,
      },
      {
        nombre: "Cargador Rápido",
        sku_prefix: "TEL-CAR",
        precio_min: 25000,
        precio_max: 150000,
        peso_min: 0.1,
        peso_max: 0.3,
        dimensiones: "10x5x3",
        fragil: true,
      },
    ],
    Lácteos: [
      {
        nombre: "Leche Entera 1L",
        sku_prefix: "LAC-LCH",
        precio_min: 3500,
        precio_max: 5500,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "10x6x20",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Queso Mozzarella 500g",
        sku_prefix: "LAC-QUE",
        precio_min: 10000,
        precio_max: 15000,
        peso_min: 0.5,
        peso_max: 0.6,
        dimensiones: "15x10x5",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Yogurt Natural 1kg",
        sku_prefix: "LAC-YOG",
        precio_min: 7000,
        precio_max: 12000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "12x12x20",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Mantequilla 250g",
        sku_prefix: "LAC-MNT",
        precio_min: 5000,
        precio_max: 9000,
        peso_min: 0.25,
        peso_max: 0.3,
        dimensiones: "12x8x3",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Crema de Leche 500ml",
        sku_prefix: "LAC-CRM",
        precio_min: 8000,
        precio_max: 12000,
        peso_min: 0.5,
        peso_max: 0.6,
        dimensiones: "8x8x15",
        fragil: false,
        refrigeracion: true,
      },
    ],
    Granos: [
      {
        nombre: "Arroz Premium 5kg",
        sku_prefix: "GRA-ARZ",
        precio_min: 25000,
        precio_max: 35000,
        peso_min: 5,
        peso_max: 5.1,
        dimensiones: "25x40x10",
        fragil: false,
      },
      {
        nombre: "Frijol Rojo 1kg",
        sku_prefix: "GRA-FRJ",
        precio_min: 6000,
        precio_max: 12000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x25x5",
        fragil: false,
      },
      {
        nombre: "Lentejas 1kg",
        sku_prefix: "GRA-LNT",
        precio_min: 5000,
        precio_max: 10000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x25x5",
        fragil: false,
      },
      {
        nombre: "Garbanzo 1kg",
        sku_prefix: "GRA-GRB",
        precio_min: 7000,
        precio_max: 12000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x25x5",
        fragil: false,
      },
      {
        nombre: "Quinoa 500g",
        sku_prefix: "GRA-QIN",
        precio_min: 12000,
        precio_max: 18000,
        peso_min: 0.5,
        peso_max: 0.6,
        dimensiones: "12x20x5",
        fragil: false,
      },
    ],
    Ropa: [
      {
        nombre: "Pantalón Casual",
        sku_prefix: "ROP-PNT",
        precio_min: 60000,
        precio_max: 120000,
        peso_min: 0.3,
        peso_max: 0.5,
        dimensiones: "30x20x5",
        fragil: false,
      },
      {
        nombre: "Camisa Formal",
        sku_prefix: "ROP-CMS",
        precio_min: 45000,
        precio_max: 90000,
        peso_min: 0.2,
        peso_max: 0.4,
        dimensiones: "25x20x3",
        fragil: false,
      },
      {
        nombre: "Vestido Casual",
        sku_prefix: "ROP-VST",
        precio_min: 80000,
        precio_max: 150000,
        peso_min: 0.3,
        peso_max: 0.5,
        dimensiones: "30x20x3",
        fragil: false,
      },
      {
        nombre: "Chaqueta Deportiva",
        sku_prefix: "ROP-CHQ",
        precio_min: 100000,
        precio_max: 180000,
        peso_min: 0.4,
        peso_max: 0.6,
        dimensiones: "35x25x5",
        fragil: false,
      },
      {
        nombre: "Jeans Premium",
        sku_prefix: "ROP-JNS",
        precio_min: 120000,
        precio_max: 200000,
        peso_min: 0.5,
        peso_max: 0.8,
        dimensiones: "30x20x5",
        fragil: false,
      },
    ],
    Calzado: [
      {
        nombre: "Zapatillas Running",
        sku_prefix: "CAL-ZPT",
        precio_min: 180000,
        precio_max: 350000,
        peso_min: 0.6,
        peso_max: 1,
        dimensiones: "35x20x15",
        fragil: false,
      },
      {
        nombre: "Zapatos Formales",
        sku_prefix: "CAL-ZAP",
        precio_min: 150000,
        precio_max: 280000,
        peso_min: 0.8,
        peso_max: 1.2,
        dimensiones: "35x20x15",
        fragil: false,
      },
      {
        nombre: "Tacones Elegantes",
        sku_prefix: "CAL-TAC",
        precio_min: 120000,
        precio_max: 250000,
        peso_min: 0.5,
        peso_max: 0.9,
        dimensiones: "30x20x15",
        fragil: false,
      },
      {
        nombre: "Botas de Seguridad",
        sku_prefix: "CAL-BOT",
        precio_min: 200000,
        precio_max: 350000,
        peso_min: 1,
        peso_max: 1.5,
        dimensiones: "40x30x15",
        fragil: false,
      },
      {
        nombre: "Sandalias Casual",
        sku_prefix: "CAL-SND",
        precio_min: 50000,
        precio_max: 120000,
        peso_min: 0.3,
        peso_max: 0.7,
        dimensiones: "30x20x10",
        fragil: false,
      },
    ],
    Frutas: [
      {
        nombre: "Manzanas Red Delicious kg",
        sku_prefix: "FRU-MNZ",
        precio_min: 6000,
        precio_max: 10000,
        peso_min: 1,
        peso_max: 1,
        dimensiones: "10x10x10",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Bananos kg",
        sku_prefix: "FRU-BNN",
        precio_min: 2500,
        precio_max: 5000,
        peso_min: 1,
        peso_max: 1,
        dimensiones: "10x10x10",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Fresas 500g",
        sku_prefix: "FRU-FRS",
        precio_min: 6000,
        precio_max: 12000,
        peso_min: 0.5,
        peso_max: 0.5,
        dimensiones: "15x10x5",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Uvas sin Semilla 500g",
        sku_prefix: "FRU-UVS",
        precio_min: 8000,
        precio_max: 12000,
        peso_min: 0.5,
        peso_max: 0.5,
        dimensiones: "15x10x5",
        fragil: false,
        refrigeracion: true,
      },
      {
        nombre: "Naranjas Valencia kg",
        sku_prefix: "FRU-NRJ",
        precio_min: 3000,
        precio_max: 6000,
        peso_min: 1,
        peso_max: 1,
        dimensiones: "10x10x10",
        fragil: false,
        refrigeracion: true,
      },
    ],
    Limpieza: [
      {
        nombre: "Detergente Líquido 2L",
        sku_prefix: "LIM-DET",
        precio_min: 20000,
        precio_max: 35000,
        peso_min: 2,
        peso_max: 2.2,
        dimensiones: "15x10x25",
        fragil: false,
      },
      {
        nombre: "Suavizante 1L",
        sku_prefix: "LIM-SUA",
        precio_min: 12000,
        precio_max: 25000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "10x8x20",
        fragil: false,
      },
      {
        nombre: "Limpia Vidrios 750ml",
        sku_prefix: "LIM-VID",
        precio_min: 8000,
        precio_max: 18000,
        peso_min: 0.8,
        peso_max: 0.9,
        dimensiones: "10x5x25",
        fragil: false,
      },
      {
        nombre: "Desinfectante Multiusos 1L",
        sku_prefix: "LIM-DES",
        precio_min: 10000,
        precio_max: 20000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "10x8x25",
        fragil: false,
      },
      {
        nombre: "Jabón en Polvo 3kg",
        sku_prefix: "LIM-JAB",
        precio_min: 25000,
        precio_max: 40000,
        peso_min: 3,
        peso_max: 3.2,
        dimensiones: "20x15x30",
        fragil: false,
      },
    ],
    "Alimentos Básicos": [
      {
        nombre: "Arroz Blanco 1kg",
        sku_prefix: "ALI-ARR",
        precio_min: 4000,
        precio_max: 8000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x25x5",
        fragil: false,
      },
      {
        nombre: "Azúcar Refinada 1kg",
        sku_prefix: "ALI-AZU",
        precio_min: 4000,
        precio_max: 7000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x20x5",
        fragil: false,
      },
      {
        nombre: "Aceite Vegetal 1L",
        sku_prefix: "ALI-ACE",
        precio_min: 8000,
        precio_max: 15000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "10x10x25",
        fragil: false,
      },
      {
        nombre: "Pasta Espagueti 500g",
        sku_prefix: "ALI-PAS",
        precio_min: 3000,
        precio_max: 6000,
        peso_min: 0.5,
        peso_max: 0.6,
        dimensiones: "30x10x5",
        fragil: false,
      },
      {
        nombre: "Sal Refinada 1kg",
        sku_prefix: "ALI-SAL",
        precio_min: 1500,
        precio_max: 4000,
        peso_min: 1,
        peso_max: 1.1,
        dimensiones: "15x10x5",
        fragil: false,
      },
    ],
    Hogar: [
      {
        nombre: "Papel Higiénico x12",
        sku_prefix: "HOG-PPH",
        precio_min: 20000,
        precio_max: 35000,
        peso_min: 2,
        peso_max: 3,
        dimensiones: "40x30x30",
        fragil: false,
      },
      {
        nombre: "Servilletas x100",
        sku_prefix: "HOG-SRV",
        precio_min: 4000,
        precio_max: 8000,
        peso_min: 0.4,
        peso_max: 0.6,
        dimensiones: "20x20x10",
        fragil: false,
      },
      {
        nombre: "Toallas de Papel x3",
        sku_prefix: "HOG-TLL",
        precio_min: 8000,
        precio_max: 15000,
        peso_min: 0.6,
        peso_max: 1,
        dimensiones: "30x20x20",
        fragil: false,
      },
      {
        nombre: "Pañuelos Desechables x6",
        sku_prefix: "HOG-PAN",
        precio_min: 10000,
        precio_max: 20000,
        peso_min: 0.8,
        peso_max: 1,
        dimensiones: "30x25x15",
        fragil: false,
      },
      {
        nombre: "Bolsas para Basura x30",
        sku_prefix: "HOG-BLS",
        precio_min: 5000,
        precio_max: 12000,
        peso_min: 0.5,
        peso_max: 0.8,
        dimensiones: "30x30x10",
        fragil: false,
      },
    ],
  };

  const proveedores = [
    "PROV001",
    "PROV002",
    "PROV003",
    "PROV004",
    "PROV005",
    "PROV006",
    "PROV007",
    "PROV008",
    "PROV009",
    "PROV010",
    "PROV011",
    "PROV012",
    "PROV013",
    "PROV014",
    "PROV015",
  ];

  const estados = [
    "activo",
    "activo",
    "activo",
    "activo",
    "activo",
    "inactivo",
    "agotado",
  ];

  // Función para generar IDs de almacenes disponibles
  const generarIdAlmacenes = () => {
    const almacenes = [];
    for (let i = 1; i <= 2000; i++) {
      almacenes.push(`ALM${i.toString().padStart(4, "0")}`);
    }
    return almacenes;
  };

  // Funciones auxiliares
  const randomFloat = (min, max, decimals = 2) => {
    return +(Math.random() * (max - min) + min).toFixed(decimals);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generarCodigoBarras = () => {
    return Math.floor(Math.random() * 9000000000000) + 1000000000000;
  };

  const generarSKU = (categoria, producto) => {
    const suffix = randomInt(100, 999);
    return `${producto.sku_prefix}-${suffix}`;
  };

  const generarFecha = (diasAdelante = 30) => {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + randomInt(1, diasAdelante));
    return fecha.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const generarFechaVencimiento = (categoria) => {
    if (categoria === "Lácteos" || categoria === "Frutas") {
      return generarFecha(randomInt(5, 20));
    } else if (categoria === "Alimentos Básicos" || categoria === "Granos") {
      return generarFecha(randomInt(180, 365));
    } else if (categoria === "Limpieza") {
      return generarFecha(randomInt(365, 730));
    }
    return ""; // Productos que no vencen
  };

  const descargarCSV = (csvContent, filename) => {
    try {
      const BOM = "\uFEFF";
      const blob = new Blob([BOM + csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);

      return true;
    } catch (error) {
      console.error("Error al descargar archivo:", error);
      return false;
    }
  };

  const generarDatos = async () => {
    setGenerando(true);
    setGenerado(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const headers = [
        "id_producto",
        "id_almacen",
        "nombre_producto",
        "categoria",
        "descripcion",
        "sku",
        "codigo_barras",
        "precio_unitario",
        "cantidad_stock",
        "nivel_reorden",
        "ultima_reposicion",
        "fecha_vencimiento",
        "id_proveedor",
        "peso_kg",
        "dimensiones_cm",
        "es_fragil",
        "requiere_refrigeracion",
        "estado",
      ];

      let csvContent = headers.join(";") + ";\n";
      const distribucionCategorias = {};
      const distribucionEstados = {};
      const almacenesDisponibles = generarIdAlmacenes();

      for (let i = 1; i <= 10000; i++) {
        const idProducto = `P${i.toString().padStart(4, "0")}`;

        // Seleccionar categoria y producto aleatorio
        const categoriasKeys = Object.keys(categorias);
        const categoriaSeleccionada = randomChoice(categoriasKeys);
        const productosCategoria = categorias[categoriaSeleccionada];
        const productoSeleccionado = randomChoice(productosCategoria);

        // Asignar almacén aleatorio
        const idAlmacen = randomChoice(almacenesDisponibles);

        // Generar datos del producto
        const nombreProducto = productoSeleccionado.nombre;
        const categoria = categoriaSeleccionada;

        // Descripción variada
        const descripcionVariantes = [
          `${nombreProducto} de alta calidad`,
          `${nombreProducto} premium`,
          `${nombreProducto} disponible en varios modelos`,
          `${nombreProducto} con garantía`,
          `${nombreProducto} - producto estrella`,
        ];
        const descripcion = randomChoice(descripcionVariantes);

        const sku = generarSKU(categoria, productoSeleccionado);
        const codigoBarras = generarCodigoBarras();
        const precioUnitario = randomInt(
          productoSeleccionado.precio_min,
          productoSeleccionado.precio_max
        );
        const cantidadStock = randomInt(20, 500);
        const nivelReorden = Math.floor(cantidadStock * 0.2); // 20% del stock
        const ultimaReposicion = generarFecha(-30); // Fecha en el pasado
        const fechaVencimiento = generarFechaVencimiento(categoria);
        const idProveedor = randomChoice(proveedores);
        const pesoKg = randomFloat(
          productoSeleccionado.peso_min,
          productoSeleccionado.peso_max
        );
        const dimensionesCm = productoSeleccionado.dimensiones;
        const esFragil = productoSeleccionado.fragil || false;
        const requiereRefrigeracion =
          productoSeleccionado.refrigeracion || false;
        const estado = randomChoice(estados);

        // Estadísticas
        distribucionCategorias[categoria] =
          (distribucionCategorias[categoria] || 0) + 1;
        distribucionEstados[estado] = (distribucionEstados[estado] || 0) + 1;

        // Crear fila del CSV
        const fila = [
          idProducto,
          idAlmacen,
          nombreProducto,
          categoria,
          descripcion,
          sku,
          codigoBarras,
          precioUnitario,
          cantidadStock,
          nivelReorden,
          ultimaReposicion,
          fechaVencimiento,
          idProveedor,
          pesoKg,
          dimensionesCm,
          esFragil,
          requiereRefrigeracion,
          estado,
        ];

        csvContent += fila.join(";") + ";\n";
      }

      // Descargar el archivo
      const filename = `productos_almacenes_10000_registros_${new Date().getTime()}.csv`;
      const descargaExitosa = descargarCSV(csvContent, filename);

      if (descargaExitosa) {
        setEstadisticas({
          categorias: distribucionCategorias,
          estados: distribucionEstados,
          totalRegistros: 10000,
          nombreArchivo: filename,
        });

        setGenerado(true);
      } else {
        alert(
          "Error al descargar el archivo. Tu navegador podría estar bloqueando las descargas."
        );
      }
    } catch (error) {
      console.error("Error generando datos:", error);
      alert("Error al generar los datos. Por favor intenta de nuevo.");
    } finally {
      setGenerando(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div
          style={{
            margin: "0 auto 16px",
            width: "64px",
            height: "64px",
            backgroundColor: "#16a34a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
          }}>
          📦
        </div>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "8px",
          }}>
          Generador de Productos para Almacenes
        </h1>
        <p style={{ color: "#6b7280" }}>
          Genera 10,000 productos distribuidos entre los almacenes creados
        </p>
      </div>

      <div
        style={{
          marginBottom: "32px",
          padding: "24px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
        }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
          }}>
          <span style={{ marginRight: "8px" }}>📋</span>
          Estructura del CSV de Productos
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "8px",
            fontSize: "14px",
            color: "#374151",
          }}>
          <span>• ID del producto</span>
          <span>• ID del almacén</span>
          <span>• Nombre del producto</span>
          <span>• Categoría</span>
          <span>• Descripción</span>
          <span>• SKU</span>
          <span>• Código de barras</span>
          <span>• Precio unitario</span>
          <span>• Cantidad en stock</span>
          <span>• Nivel de reorden</span>
          <span>• Última reposición</span>
          <span>• Fecha de vencimiento</span>
          <span>• ID del proveedor</span>
          <span>• Peso en kg</span>
          <span>• Dimensiones en cm</span>
          <span>• Es frágil (true/false)</span>
          <span>• Requiere refrigeración</span>
          <span>• Estado</span>
        </div>

        <div style={{ marginTop: "16px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#16a34a",
            }}>
            Categorías incluidas:
          </h3>
          <div
            style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>
            {Object.keys(categorias).join(" • ")}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={generarDatos}
          disabled={generando}
          style={{
            padding: "12px 32px",
            borderRadius: "8px",
            fontWeight: "600",
            color: generando ? "#374151" : "white",
            border: "none",
            cursor: generando ? "not-allowed" : "pointer",
            backgroundColor: generando ? "#9ca3af" : "#16a34a",
            fontSize: "16px",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
          onMouseOver={(e) => {
            if (!generando) {
              e.target.style.backgroundColor = "#15803d";
              e.target.style.boxShadow = "0 4px 12px rgba(22, 163, 74, 0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (!generando) {
              e.target.style.backgroundColor = "#16a34a";
              e.target.style.boxShadow = "none";
            }
          }}>
          {generando ? (
            <>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #374151",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  marginRight: "8px",
                }}></div>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
              Generando productos...
            </>
          ) : (
            <>
              <span style={{ marginRight: "8px" }}>⬇️</span>
              Generar y Descargar CSV de Productos (10,000)
            </>
          )}
        </button>

        {generado && (
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
              }}>
              <span
                style={{
                  color: "#15803d",
                  marginRight: "8px",
                  fontSize: "20px",
                }}>
                ✅
              </span>
              <span style={{ color: "#15803d", fontWeight: "600" }}>
                ¡Productos generados exitosamente!
              </span>
            </div>
            <p
              style={{
                color: "#14532d",
                fontSize: "14px",
                marginBottom: "16px",
              }}>
              Se ha descargado el archivo "{estadisticas?.nombreArchivo}" con
              10,000 productos
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
              }}>
              <button
                onClick={generarDatos}
                style={{
                  padding: "8px 24px",
                  backgroundColor: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#15803d")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#16a34a")
                }>
                Generar otro archivo de productos
              </button>
            </div>
          </div>
        )}
      </div>

      {estadisticas && (
        <div
          style={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f0fdf4",
              borderRadius: "8px",
            }}>
            <h3
              style={{
                fontWeight: "600",
                color: "#15803d",
                marginBottom: "12px",
              }}>
              Distribución por Estado
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {Object.entries(estadisticas.estados).map(([estado, count]) => (
                <div
                  key={estado}
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ textTransform: "capitalize" }}>{estado}:</span>
                  <span style={{ fontWeight: "500" }}>{count} productos</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              backgroundColor: "#eff6ff",
              borderRadius: "8px",
            }}>
            <h3
              style={{
                fontWeight: "600",
                color: "#1e40af",
                marginBottom: "12px",
              }}>
              Top 5 Categorías
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {Object.entries(estadisticas.categorias)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([categoria, count]) => (
                  <div
                    key={categoria}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <span>{categoria}:</span>
                    <span style={{ fontWeight: "500" }}>{count} productos</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneradorProductos;
