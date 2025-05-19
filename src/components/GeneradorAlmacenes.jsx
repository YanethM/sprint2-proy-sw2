import React, { useState } from 'react';

const GeneradorAlmacenes = () => {
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
    {ciudad: "Ibagué", departamento: "Tolima", latMin: 4.400, latMax: 4.500, lonMin: -75.300, lonMax: -75.100},
    {ciudad: "Popayán", departamento: "Cauca", latMin: 2.400, latMax: 2.500, lonMin: -76.700, lonMax: -76.500},
    {ciudad: "Pasto", departamento: "Nariño", latMin: 1.200, latMax: 1.300, lonMin: -77.400, lonMax: -77.200},
    {ciudad: "Villavicencio", departamento: "Meta", latMin: 4.100, latMax: 4.200, lonMin: -73.700, lonMax: -73.500},
    {ciudad: "Neiva", departamento: "Huila", latMin: 2.900, latMax: 3.000, lonMin: -75.400, lonMax: -75.200},
    {ciudad: "Santa Marta", departamento: "Magdalena", latMin: 11.200, latMax: 11.300, lonMin: -74.300, lonMax: -74.100},
    {ciudad: "Valledupar", departamento: "Cesar", latMin: 10.400, latMax: 10.500, lonMin: -73.300, lonMax: -73.100},
    {ciudad: "Montería", departamento: "Córdoba", latMin: 8.700, latMax: 8.800, lonMin: -75.900, lonMax: -75.700},
    {ciudad: "Sincelejo", departamento: "Sucre", latMin: 9.300, latMax: 9.400, lonMin: -75.400, lonMax: -75.200},
    {ciudad: "Tunja", departamento: "Boyacá", latMin: 5.500, latMax: 5.600, lonMin: -73.400, lonMax: -73.200},
    {ciudad: "Florencia", departamento: "Caquetá", latMin: 1.600, latMax: 1.700, lonMin: -75.700, lonMax: -75.500}
  ];

  const nombresFemeninos = ["Ana", "Carolina", "Valentina", "Marcela", "Laura", "Sandra", "Maria", "Claudia", "Patricia", "Lucia", "Adriana", "Natalia", "Alejandra", "Isabella", "Sofia", "Juliana", "Camila", "Daniela", "Gabriela", "Andrea"];
  const nombresMasculinos = ["Carlos", "Diego", "Fernando", "Ricardo", "Javier", "Andrés", "Miguel", "Juan", "Pedro", "Roberto", "Alejandro", "Sergio", "David", "Francisco", "Eduardo", "Gonzalo", "Antonio", "Manuel", "Rafael", "Sebastián"];
  const apellidos = ["Ramírez", "Martínez", "Herrera", "Cárdenas", "López", "Duque", "Jaimes", "Ríos", "Méndez", "Hurtado", "García", "Rodríguez", "González", "Fernández", "Gómez", "Díaz", "Vargas", "Rojas", "Morales", "Castro", "Delgado", "Ruiz", "Medina", "Peña", "Jiménez", "Torres", "Flores", "Ramos", "Guerrero", "Cruz"];

  const tiposAlmacen = [
    "Centro de Distribución",
    "Almacén Regional",
    "Bodega Principal",
    "Depósito Central",
    "Centro Logístico",
    "Almacén Industrial",
    "Bodega Metropolitana",
    "Centro de Operaciones",
    "Depósito Urbano",
    "Almacén Especializado"
  ];

  const descriptoresAlmacen = [
    "Principal", "Norte", "Sur", "Oriental", "Occidental", "Central", "Metropolitano", 
    "Industrial", "Comercial", "Express", "Premium", "Elite", "Master", "Pro", "Plus",
    "Zona Franca", "Logístico", "Estratégico", "Corporativo", "Empresarial"
  ];

  const estados = ["activo", "activo", "activo", "activo", "activo", "mantenimiento", "activo", "inactivo"];

  // Funciones auxiliares
  const randomFloat = (min, max, decimals = 3) => {
    return +(Math.random() * (max - min) + min).toFixed(decimals);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generarEmail = (nombre, apellido) => {
    const nombreLimpio = nombre.toLowerCase()
      .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
      .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n');
    const apellidoLimpio = apellido.toLowerCase()
      .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
      .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n');
    return `${nombreLimpio.charAt(0)}${apellidoLimpio}@logistica.com`;
  };

  const generarDireccion = () => {
    const tipoVia = randomChoice(['Calle', 'Carrera', 'Avenida', 'Diagonal', 'Transversal']);
    const numero1 = randomInt(1, 150);
    const numero2 = randomInt(1, 99);
    const numero3 = randomInt(1, 150);
    return `${tipoVia} ${numero1} #${numero2}-${numero3}`;
  };

  const descargarCSV = (csvContent, filename) => {
    try {
      // Crear el blob con BOM para caracteres especiales
      const BOM = '\uFEFF';
      const blob = new Blob([BOM + csvContent], { 
        type: 'text/csv;charset=utf-8;' 
      });
      
      // Crear URL temporal
      const url = URL.createObjectURL(blob);
      
      // Crear elemento de descarga
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      
      // Forzar descarga
      document.body.appendChild(link);
      link.click();
      
      // Limpiar
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
      // Simular loading
      await new Promise(resolve => setTimeout(resolve, 500));

      const headers = ["id_almacen", "nombre_almacen", "direccion", "ciudad", "departamento", "pais", "codigo_postal", "latitud", "longitud", "gerente", "telefono", "email", "capacidad_m2", "estado"];
      
      let csvContent = headers.join(';') + ';\n';
      const distribucionDepartamentos = {};
      const distribucionEstados = {};

      for (let i = 1; i <= 10000; i++) {
        const idAlmacen = `ALM${i.toString().padStart(4, '0')}`;
        
        // Seleccionar ciudad aleatoria
        const ubicacion = randomChoice(ciudadesColombia);
        
        // Generar nombre del almacén
        const tipoAlmacen = randomChoice(tiposAlmacen);
        const descriptor = randomChoice(descriptoresAlmacen);
        const nombreAlmacen = `${tipoAlmacen} ${descriptor}`;
        
        // Generar dirección
        const direccion = generarDireccion();
        
        // Datos de ubicación
        const ciudad = ubicacion.ciudad;
        const departamento = ubicacion.departamento;
        const pais = "Colombia";
        const codigoPostal = randomInt(100000, 999999);
        
        // Coordenadas dentro del rango de la ciudad
        const latitud = randomFloat(ubicacion.latMin, ubicacion.latMax);
        const longitud = randomFloat(ubicacion.lonMin, ubicacion.lonMax);
        
        // Generar gerente
        const genero = Math.random() > 0.5 ? 'F' : 'M';
        const nombre = genero === 'F' ? randomChoice(nombresFemeninos) : randomChoice(nombresMasculinos);
        const apellido = randomChoice(apellidos);
        const gerente = `${nombre} ${apellido}`;
        
        // Generar teléfono (formato colombiano)
        const telefono = `57${randomInt(300, 350)}${randomInt(1000000, 9999999)}`;
        
        // Generar email
        const email = generarEmail(nombre, apellido);
        
        // Capacidad en m2
        const capacidadM2 = randomInt(1000, 10000);
        
        // Estado
        const estado = randomChoice(estados);
        
        // Estadísticas
        distribucionDepartamentos[departamento] = (distribucionDepartamentos[departamento] || 0) + 1;
        distribucionEstados[estado] = (distribucionEstados[estado] || 0) + 1;
        
        // Agregar fila al CSV
        const fila = [idAlmacen, nombreAlmacen, direccion, ciudad, departamento, pais, codigoPostal, latitud, longitud, gerente, telefono, email, capacidadM2, estado];
        csvContent += fila.join(';') + ';\n';
      }

      // Descargar el archivo
      const filename = `almacenes_colombia_10000_registros_${new Date().getTime()}.csv`;
      const descargaExitosa = descargarCSV(csvContent, filename);
      
      if (descargaExitosa) {
        // Configurar estadísticas
        setEstadisticas({
          departamentos: distribucionDepartamentos,
          estados: distribucionEstados,
          totalRegistros: 10000,
          nombreArchivo: filename
        });
        
        setGenerado(true);
      } else {
        alert('Error al descargar el archivo. Tu navegador podría estar bloqueando las descargas.');
      }
    } catch (error) {
      console.error('Error generando datos:', error);
      alert('Error al generar los datos. Por favor intenta de nuevo.');
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

      <div style={{ marginBottom: '32px', padding: '24px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>📄</span>
          Estructura del CSV
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '14px', color: '#374151' }}>
          <span>• ID del almacén</span>
          <span>• Nombre del almacén</span>
          <span>• Dirección</span>
          <span>• Ciudad</span>
          <span>• Departamento</span>
          <span>• País</span>
          <span>• Código postal</span>
          <span>• Coordenadas (latitud/longitud)</span>
          <span>• Nombre del gerente</span>
          <span>• Teléfono</span>
          <span>• Email</span>
          <span>• Capacidad en m²</span>
          <span>• Estado (activo/mantenimiento/inactivo)</span>
          <span>• 20 ciudades principales de Colombia</span>
        </div>
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
          onMouseOver={(e) => {
            if (!generando) {
              e.target.style.backgroundColor = '#1d4ed8';
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.15)';
            }
          }}
          onMouseOut={(e) => {
            if (!generando) {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.boxShadow = 'none';
            }
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
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
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
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                Generar otro archivo
              </button>
              
              <button
                onClick={() => {
                  setGenerando(true);
                  setTimeout(async () => {
                    const headers = ["id_almacen", "nombre_almacen", "direccion", "ciudad", "departamento", "pais", "codigo_postal", "latitud", "longitud", "gerente", "telefono", "email", "capacidad_m2", "estado"];
                    let csvContent = headers.join(';') + ';\n';
                    
                    for (let i = 1; i <= 100; i++) {
                      const idAlmacen = `ALM${i.toString().padStart(4, '0')}`;
                      const ubicacion = randomChoice(ciudadesColombia);
                      const tipoAlmacen = randomChoice(tiposAlmacen);
                      const descriptor = randomChoice(descriptoresAlmacen);
                      const nombreAlmacen = `${tipoAlmacen} ${descriptor}`;
                      const direccion = generarDireccion();
                      const ciudad = ubicacion.ciudad;
                      const departamento = ubicacion.departamento;
                      const pais = "Colombia";
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
                      
                      const fila = [idAlmacen, nombreAlmacen, direccion, ciudad, departamento, pais, codigoPostal, latitud, longitud, gerente, telefono, email, capacidadM2, estado];
                      csvContent += fila.join(';') + ';\n';
                    }
                    
                    try {
                      await navigator.clipboard.writeText(csvContent);
                      alert('¡100 registros de muestra copiados al portapapeles! Puedes pegarlos en Excel o un editor de texto.');
                    } catch (err) {
                      console.error('Error al copiar al portapapeles:', err);
                      alert('Error al copiar al portapapeles. Tu navegador podría no soportar esta función.');
                    }
                    setGenerando(false);
                  }, 100);
                }}
                disabled={generando}
                style={{
                  padding: '8px 24px',
                  backgroundColor: generando ? '#d1d5db' : '#6b7280',
                  color: generando ? '#6b7280' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: generando ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  opacity: generando ? 0.5 : 1
                }}
                onMouseOver={(e) => {
                  if (!generando) {
                    e.target.style.backgroundColor = '#4b5563';
                  }
                }}
                onMouseOut={(e) => {
                  if (!generando) {
                    e.target.style.backgroundColor = '#6b7280';
                  }
                }}
              >
                📋 Copiar muestra (100 registros)
              </button>
            </div>
          </div>
        )}
      </div>

      {estadisticas && (
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '16px', backgroundColor: '#eff6ff', borderRadius: '8px' }}>
            <h3 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '12px' }}>
              Distribución por Estado
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Object.entries(estadisticas.estados).map(([estado, count]) => (
                <div key={estado} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ textTransform: 'capitalize' }}>{estado}:</span>
                  <span style={{ fontWeight: '500' }}>{count} almacenes</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
            <h3 style={{ fontWeight: '600', color: '#15803d', marginBottom: '12px' }}>
              Top 5 Departamentos
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Object.entries(estadisticas.departamentos)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([departamento, count]) => (
                  <div key={departamento} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{departamento}:</span>
                    <span style={{ fontWeight: '500' }}>{count} almacenes</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneradorAlmacenes;