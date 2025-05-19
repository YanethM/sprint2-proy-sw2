import React, { useState } from 'react';
const GeneradorAlmacenes = ({ onNavigateToProducts }) => {
  const [generando, setGenerando] = useState(false);
  const [generado, setGenerado] = useState(false);
  const [estadisticas, setEstadisticas] = useState(null);

  const ciudadesColombia = [
    {ciudad: "Bogotá", departamento: "Cundinamarca", latMin: 4.450, latMax: 4.850, lonMin: -74.300, lonMax: -73.900},
    {ciudad: "Medellín", departamento: "Antioquia", latMin: 6.100, latMax: 6.400, lonMin: -75.800, lonMax: -75.400},
    {ciudad: "Cali", departamento: "Valle del Cauca", latMin: 3.300, latMax: 3.600, lonMin: -76.700, lonMax: -76.300},
    {ciudad: "Barranquilla", departamento: "Atlántico", latMin: 10.900, latMax: 11.100, lonMin: -74.900, lonMax: -74.700},
    {ciudad: "Cartagena", departamento: "Bolívar", latMin: 10.350, latMax: 10.450, lonMin: -75.650, lonMax: -75.450},
    {ciudad: "Manizales", departamento: "Caldas", latMin: 5.000, latMax: 5.100, lonMin: -75.600, lonMax: -75.400},
    {ciudad: "Bucaramanga", departamento: "Santander", latMin: 7.000, latMax: 7.200, lonMin: -73.300, lonMax: -73.000},
    {ciudad: "Pereira", departamento: "Risaralda", latMin: 4.700, latMax: 4.900, lonMin: -75.800, lonMax: -75.600},
    {ciudad: "Armenia", departamento: "Quindío", latMin: 4.500, latMax: 4.600, lonMin: -75.800, lonMax: -75.600},
    {ciudad: "Ibagué", departamento: "Tolima", latMin: 4.400, latMax: 4.500, lonMin: -75.300, lonMax: -75.100}
  ];

  const nombresFemeninos = ["Ana", "Carolina", "Valentina", "Marcela", "Laura"];
  const nombresMasculinos = ["Carlos", "Diego", "Fernando", "Ricardo", "Javier"];
  const apellidos = ["Ramírez", "Martínez", "Herrera", "Cárdenas", "López"];
  const tiposAlmacen = ["Centro de Distribución", "Almacén Regional", "Bodega Principal"];
  const descriptoresAlmacen = ["Principal", "Norte", "Sur", "Oriental", "Occidental"];
  const estados = ["activo", "activo", "activo", "mantenimiento", "inactivo"];

  const randomFloat = (min, max, decimals = 3) => +(Math.random() * (max - min) + min).toFixed(decimals);
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];
  const generarEmail = (nombre, apellido) => `${nombre.toLowerCase().charAt(0)}${apellido.toLowerCase()}@logistica.com`;
  const generarDireccion = () => {
    const tipoVia = randomChoice(['Calle', 'Carrera', 'Avenida']);
    return `${tipoVia} ${randomInt(1, 150)} #${randomInt(1, 99)}-${randomInt(1, 150)}`;
  };

  const descargarCSV = (csvContent, filename) => {
    try {
      const BOM = '\uFEFF';
      const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
      return true;
    } catch (error) {
      console.error('Error al descargar archivo:', error);
      return false;
    }
  };

  const generarDatos = async () => {
    setGenerando(true);
    setGenerado(false);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const headers = ["id_almacen", "nombre_almacen", "direccion", "ciudad", "departamento", "pais", "codigo_postal", "latitud", "longitud", "gerente", "telefono", "email", "capacidad_m2", "estado"];
      let csvContent = headers.join(';') + ';\n';
      const distribucionDepartamentos = {};
      const distribucionEstados = {};

      for (let i = 1; i <= 10000; i++) {
        const idAlmacen = `ALM${i.toString().padStart(4, '0')}`;
        const ubicacion = randomChoice(ciudadesColombia);
        const nombreAlmacen = `${randomChoice(tiposAlmacen)} ${randomChoice(descriptoresAlmacen)}`;
        const direccion = generarDireccion();
        const ciudad = ubicacion.ciudad;
        const departamento = ubicacion.departamento;
        const codigoPostal = randomInt(100000, 999999);
        const latitud = randomFloat(ubicacion.latMin, ubicacion.latMax);
        const longitud = randomFloat(ubicacion.lonMin, ubicacion.lonMax);
        const genero = Math.random() > 0.5 ? 'F' : 'M';
        const nombre = genero === 'F' ? randomChoice(nombresFemeninos) : randomChoice(nombresMasculinos);
        const apellido = randomChoice(apellidos);
        const gerente = `${nombre} ${apellido}`;
        const telefono = `57${randomInt(300, 350)}${randomInt(1000000, 9999999)}`;
        const email = generarEmail(nombre, apellido);
        const capacidadM2 = randomInt(1000, 10000);
        const estado = randomChoice(estados);
        
        distribucionDepartamentos[departamento] = (distribucionDepartamentos[departamento] || 0) + 1;
        distribucionEstados[estado] = (distribucionEstados[estado] || 0) + 1;
        
        const fila = [idAlmacen, nombreAlmacen, direccion, ciudad, departamento, "Colombia", codigoPostal, latitud, longitud, gerente, telefono, email, capacidadM2, estado];
        csvContent += fila.join(';') + ';\n';
      }

      const filename = `almacenes_colombia_10000_registros_${new Date().getTime()}.csv`;
      const descargaExitosa = descargarCSV(csvContent, filename);
      
      if (descargaExitosa) {
        setEstadisticas({
          departamentos: distribucionDepartamentos,
          estados: distribucionEstados,
          totalRegistros: 10000,
          nombreArchivo: filename
        });
        setGenerado(true);
      } else {
        alert('Error al descargar el archivo.');
      }
    } catch (error) {
      console.error('Error generando datos:', error);
      alert('Error al generar los datos.');
    } finally {
      setGenerando(false);
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ margin: '0 auto 16px', width: '64px', height: '64px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'black' }}>
          🏢
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
          Generador de Datos de Almacenes
        </h1>
        <p style={{ color: '#6b7280' }}>
          Genera 10,000 registros de almacenes distribuidos por Colombia
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={generarDatos}
          disabled={generando}
          style={{
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            color: generando ? '#374151' : 'white',
            border: 'none',
            cursor: generando ? 'not-allowed' : 'pointer',
            backgroundColor: generando ? '#9ca3af' : '#2563eb',
            fontSize: '16px',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {generando ? (
            <>
              <div style={{ 
                width: '20px', 
                height: '20px', 
                border: '2px solid #374151', 
                borderTop: '2px solid transparent', 
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite', 
                marginRight: '8px' 
              }}></div>
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              Generando datos...
            </>
          ) : (
            <>
              <span style={{ marginRight: '8px' }}>⬇️</span>
              Generar y Descargar CSV (10,000 registros)
            </>
          )}
        </button>

        {generado && (
          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#ecfdf5', border: '1px solid #d1fae5', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#059669', marginRight: '8px', fontSize: '20px' }}>✅</span>
              <span style={{ color: '#047857', fontWeight: '600' }}>
                ¡Archivo generado exitosamente!
              </span>
            </div>
            <p style={{ color: '#065f46', fontSize: '14px', marginBottom: '16px' }}>
              Se ha descargado el archivo "{estadisticas?.nombreArchivo}" con 10,000 registros
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={generarDatos}
                style={{
                  padding: '8px 24px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Generar otro archivo
              </button>

              {onNavigateToProducts && (
                <button
                  onClick={onNavigateToProducts}
                  style={{
                    padding: '8px 24px',
                    backgroundColor: '#16a34a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginTop: '8px'
                  }}
                >
                  📦 Ir a Generar Productos
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const GeneradorProductos = ({ onNavigateToAlmacenes }) => {
  const [generando, setGenerando] = useState(false);
  const [generado, setGenerado] = useState(false);
  const [estadisticas, setEstadisticas] = useState(null);

  // Datos simplificados para el ejemplo
  const categorias = {
    "Electrónicos": [
      { nombre: "Televisor LED 55\"", sku_prefix: "ELE-TV", precio_min: 1200000, precio_max: 2500000, peso_min: 15, peso_max: 25, dimensiones: "55x33x8", fragil: true }
    ],
    "Lácteos": [
      { nombre: "Leche Entera 1L", sku_prefix: "LAC-LCH", precio_min: 3500, precio_max: 5500, peso_min: 1, peso_max: 1.1, dimensiones: "10x6x20", fragil: false, refrigeracion: true }
    ]
  };

  const proveedores = ["PROV001", "PROV002", "PROV003"];
  const estados = ["activo", "inactivo", "agotado"];

  const randomFloat = (min, max, decimals = 2) => +(Math.random() * (max - min) + min).toFixed(decimals);
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];

  const descargarCSV = (csvContent, filename) => {
    try {
      const BOM = '\uFEFF';
      const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
      return true;
    } catch (error) {
      console.error('Error al descargar archivo:', error);
      return false;
    }
  };

  const generarDatos = async () => {
    setGenerando(true);
    setGenerado(false);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const headers = ["id_producto", "id_almacen", "nombre_producto", "categoria", "descripcion", "sku", "codigo_barras", "precio_unitario", "cantidad_stock", "nivel_reorden", "ultima_reposicion", "fecha_vencimiento", "id_proveedor", "peso_kg", "dimensiones_cm", "es_fragil", "requiere_refrigeracion", "estado"];
      let csvContent = headers.join(';') + ';\n';
      const distribucionCategorias = {};
      const distribucionEstados = {};

      for (let i = 1; i <= 10000; i++) {
        const idProducto = `P${i.toString().padStart(4, '0')}`;
        const idAlmacen = `ALM${randomInt(1, 2000).toString().padStart(4, '0')}`;
        const categoriasKeys = Object.keys(categorias);
        const categoriaSeleccionada = randomChoice(categoriasKeys);
        const productosCategoria = categorias[categoriaSeleccionada];
        const productoSeleccionado = randomChoice(productosCategoria);
        
        const nombreProducto = productoSeleccionado.nombre;
        const categoria = categoriaSeleccionada;
        const descripcion = `${nombreProducto} de alta calidad`;
        const sku = `${productoSeleccionado.sku_prefix}-${randomInt(100, 999)}`;
        const codigoBarras = Math.floor(Math.random() * 9000000000000) + 1000000000000;
        const precioUnitario = randomInt(productoSeleccionado.precio_min, productoSeleccionado.precio_max);
        const cantidadStock = randomInt(20, 500);
        const nivelReorden = Math.floor(cantidadStock * 0.2);
        const ultimaReposicion = new Date().toLocaleDateString('es-CO');
        const fechaVencimiento = categoria === "Lácteos" ? new Date(Date.now() + 15*24*60*60*1000).toLocaleDateString('es-CO') : "";
        const idProveedor = randomChoice(proveedores);
        const pesoKg = randomFloat(productoSeleccionado.peso_min, productoSeleccionado.peso_max);
        const dimensionesCm = productoSeleccionado.dimensiones;
        const esFragil = productoSeleccionado.fragil || false;
        const requiereRefrigeracion = productoSeleccionado.refrigeracion || false;
        const estado = randomChoice(estados);
        
        distribucionCategorias[categoria] = (distribucionCategorias[categoria] || 0) + 1;
        distribucionEstados[estado] = (distribucionEstados[estado] || 0) + 1;
        
        const fila = [idProducto, idAlmacen, nombreProducto, categoria, descripcion, sku, codigoBarras, precioUnitario, cantidadStock, nivelReorden, ultimaReposicion, fechaVencimiento, idProveedor, pesoKg, dimensionesCm, esFragil, requiereRefrigeracion, estado];
        csvContent += fila.join(';') + ';\n';
      }

      const filename = `productos_almacenes_10000_registros_${new Date().getTime()}.csv`;
      const descargaExitosa = descargarCSV(csvContent, filename);
      
      if (descargaExitosa) {
        setEstadisticas({
          categorias: distribucionCategorias,
          estados: distribucionEstados,
          totalRegistros: 10000,
          nombreArchivo: filename
        });
        setGenerado(true);
      } else {
        alert('Error al descargar el archivo.');
      }
    } catch (error) {
      console.error('Error generando datos:', error);
      alert('Error al generar los datos.');
    } finally {
      setGenerando(false);
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ margin: '0 auto 16px', width: '64px', height: '64px', backgroundColor: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'white' }}>
          📦
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
          Generador de Productos para Almacenes
        </h1>
        <p style={{ color: '#6b7280' }}>
          Genera 10,000 productos distribuidos entre los almacenes creados
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={generarDatos}
          disabled={generando}
          style={{
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            color: generando ? '#374151' : 'white',
            border: 'none',
            cursor: generando ? 'not-allowed' : 'pointer',
            backgroundColor: generando ? '#9ca3af' : '#16a34a',
            fontSize: '16px',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {generando ? (
            <>
              <div style={{ 
                width: '20px', 
                height: '20px', 
                border: '2px solid #374151', 
                borderTop: '2px solid transparent', 
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite', 
                marginRight: '8px' 
              }}></div>
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              Generando productos...
            </>
          ) : (
            <>
              <span style={{ marginRight: '8px' }}>⬇️</span>
              Generar y Descargar CSV de Productos (10,000)
            </>
          )}
        </button>

        {generado && (
          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#15803d', marginRight: '8px', fontSize: '20px' }}>✅</span>
              <span style={{ color: '#15803d', fontWeight: '600' }}>
                ¡Productos generados exitosamente!
              </span>
            </div>
            <p style={{ color: '#14532d', fontSize: '14px', marginBottom: '16px' }}>
              Se ha descargado el archivo "{estadisticas?.nombreArchivo}" con 10,000 productos
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={generarDatos}
                style={{
                  padding: '8px 24px',
                  backgroundColor: '#16a34a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Generar otro archivo de productos
              </button>

              {onNavigateToAlmacenes && (
                <button
                  onClick={onNavigateToAlmacenes}
                  style={{
                    padding: '8px 24px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginTop: '8px'
                  }}
                >
                  🏢 Ir a Generar Almacenes
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Componente principal que maneja la navegación
const AppGeneradores = () => {
  const [vistaActual, setVistaActual] = useState('almacenes');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '20px' }}>
      {/* Navegación principal */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <button
            onClick={() => setVistaActual('almacenes')}
            style={{
              padding: '12px 24px',
              backgroundColor: vistaActual === 'almacenes' ? '#2563eb' : '#f3f4f6',
              color: vistaActual === 'almacenes' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🏢 Generar Almacenes
          </button>
          
          <button
            onClick={() => setVistaActual('productos')}
            style={{
              padding: '12px 24px',
              backgroundColor: vistaActual === 'productos' ? '#16a34a' : '#f3f4f6',
              color: vistaActual === 'productos' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            📦 Generar Productos
          </button>
        </div>
      </div>

      {/* Contenido según la vista actual */}
      {vistaActual === 'almacenes' && (
        <GeneradorAlmacenes 
          onNavigateToProducts={() => setVistaActual('productos')}
        />
      )}
      
      {vistaActual === 'productos' && (
        <GeneradorProductos 
          onNavigateToAlmacenes={() => setVistaActual('almacenes')}
        />
      )}
    </div>
  );
};

export default AppGeneradores;