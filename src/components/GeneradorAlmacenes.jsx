import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Building } from 'lucide-react';

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
      link.setAttribute('style', 'display: none;');
      
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

      for (let i = 1; i <= 2000; i++) {
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
      const filename = `almacenes_colombia_2000_registros_${new Date().getTime()}.csv`;
      const descargaExitosa = descargarCSV(csvContent, filename);
      
      if (descargaExitosa) {
        // Configurar estadísticas
        setEstadisticas({
          departamentos: distribucionDepartamentos,
          estados: distribucionEstados,
          totalRegistros: 2000,
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <Building className="mx-auto h-16 w-16 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Generador de Datos de Almacenes
        </h1>
        <p className="text-gray-600">
          Genera 2000 registros de almacenes distribuidos por Colombia
        </p>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="mr-2 h-5 w-5" />
          Estructura del CSV
        </h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
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

      <div className="text-center">
        <button
          onClick={generarDatos}
          disabled={generando}
          className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
            generando
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {generando ? (
            <span className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generando datos...
            </span>
          ) : (
            <span className="flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Generar y Descargar CSV
            </span>
          )}
        </button>

        {generado && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-center mb-3">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">
                ¡Archivo generado exitosamente!
              </span>
            </div>
            <p className="text-green-700 text-sm mb-4">
              Se ha descargado el archivo "{estadisticas?.nombreArchivo}" con 2000 registros
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={generarDatos}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generar otro archivo
              </button>
              
              <button
                onClick={() => {
                  // Regenerar datos y copiar al portapapeles como alternativa
                  setGenerando(true);
                  setTimeout(async () => {
                    const headers = ["id_almacen", "nombre_almacen", "direccion", "ciudad", "departamento", "pais", "codigo_postal", "latitud", "longitud", "gerente", "telefono", "email", "capacidad_m2", "estado"];
                    let csvContent = headers.join(';') + ';\n';
                    
                    for (let i = 1; i <= 100; i++) { // Solo 100 para el portapapeles
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
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                📋 Copiar muestra (100 registros)
              </button>
            </div>
          </div>
        )}
      </div>

      {estadisticas && (
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">
              Distribución por Estado
            </h3>
            <div className="space-y-2">
              {Object.entries(estadisticas.estados).map(([estado, count]) => (
                <div key={estado} className="flex justify-between">
                  <span className="capitalize">{estado}:</span>
                  <span className="font-medium">{count} almacenes</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-3">
              Top 5 Departamentos
            </h3>
            <div className="space-y-2">
              {Object.entries(estadisticas.departamentos)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([departamento, count]) => (
                  <div key={departamento} className="flex justify-between">
                    <span>{departamento}:</span>
                    <span className="font-medium">{count} almacenes</span>
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