const colaboradores = [
  {
    nombre: "Christian",
    iniciales: "CH",
    color: "bg-blue-300",
    referencias: 24,
  },
  {
    nombre: "Magdalena",
    iniciales: "MA",
    color: "bg-purple-500",
    referencias: 19,
  },
  {
    nombre: "Carlos",
    iniciales: "CA",
    color: "bg-orange-400",
    referencias: 13,
  },
  {
    nombre: "Viviana",
    iniciales: "VI",
    color: "bg-green-500",
    referencias: 11,
  },
  { nombre: "Eliezer", iniciales: "EL", color: "bg-red-400", referencias: 7 },
];

const referidos = [
  {
    nombre: "Ana Robles Flores",
    negocio: "Miscelanea “La bendición”",
    reclutador: "Marco Pérez Días",
    interes: 80,
  },
  {
    nombre: "José Luis Pérez",
    negocio: "Tortillería “La estrella”",
    reclutador: "Ana Robles Flores",
    interes: 70,
  },
  {
    nombre: "María de los Ángeles",
    negocio: "Papelería “Todo en uno”",
    reclutador: "Eliezer López",
    interes: 60,
  },
  {
    nombre: "Carlos Alberto",
    negocio: "Ferretería “El buen amigo”",
    reclutador: "Christian Hernández",
    interes: 50,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-12 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-display font-circular">Hola, Ana</h1>
        <div className="text-body">
          Miércoles 06 de diciembre &nbsp; 23° Guadalajara, Jalisco
        </div>
      </div>
      {/* Contenido */}
      <div className="flex gap-8">
        {/* Sidebar izquierdo */}
        <aside className="w-1/3 flex flex-col gap-6">
          {/* Top colaboradores */}
          <section className="space-y-6">
            <p className="text-h3">Top colaboradores</p>
            <ol className="space-y-4 bg-white rounded-2xl p-4 border border-blue-100 shadow-drop">
              {colaboradores.map((col, i) => (
                <li
                  key={col.nombre}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span>{i + 1}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-caption ${col.color}`}
                    >
                      {col.iniciales}
                    </span>
                    <span>{col.nombre}</span>
                  </div>
                  <span className="text-caption">
                    {col.referencias} referencias
                  </span>
                </li>
              ))}
            </ol>
          </section>
          {/* Resumen */}
          <section className="space-y-6">
            <p className="text-h3">Resumen</p>
            {/* Microempresarios */}
            <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-drop flex flex-col gap-2">
              <p>Microempresarios</p>
              <span className="text-blue-300 text-subtitle">520 totales</span>
              <div className="px-4 py-1 rounded-md bg-blue-100 w-fit flex items-center">
                <span className="text-caption text-blue-400">
                  10% crecimiento
                </span>
              </div>
              {/* Gráfica mock */}
              <div className="h-20 w-full flex items-end gap-2">
                <div className="w-1/5 h-8 bg-blue-100 rounded-t" />
                <div className="w-1/5 h-16 bg-blue-300 rounded-t" />
                <div className="w-1/5 h-12 bg-blue-400 rounded-t" />
                <div className="w-1/5 h-20 bg-blue-500 rounded-t" />
                <div className="w-1/5 h-14 bg-blue-200 rounded-t" />
              </div>
              <div className="flex justify-between text-body-small">
                <span>ene</span>
                <span>feb</span>
                <span>mar</span>
                <span>abr</span>
                <span>may</span>
              </div>
            </div>
            {/* Rutas */}
            <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-drop flex flex-col gap-2">
              <p>Rutas</p>
              <span className="text-blue-300 text-subtitle">Córdoba</span>
              <div className="px-4 py-1 rounded-md bg-blue-100 w-fit flex items-center">
                <span className="text-caption text-blue-400">
                  250 microempresarios
                </span>
              </div>
              {/* Gráfica mock */}
              <div className="flex gap-2 mt-1">
                <div className="bg-gray-200 h-4 w-12 rounded" />
                <div className="bg-gray-300 h-4 w-8 rounded" />
                <div className="bg-gray-400 h-4 w-16 rounded" />
              </div>
              <div className="flex gap-2 text-body-small">
                <span>Calle 1</span>
                <span>Av. Flores F. Madero</span>
                <span>Calle 13 y 12</span>
              </div>
            </div>
            {/* Nuevos prospectos */}
            <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-drop flex flex-col gap-2">
              <p>Nuevos prospectos</p>
              <span className="text-blue-300 text-subtitle">
                15 prospectos
              </span>
              <div className="px-4 py-1 rounded-md bg-blue-100 w-fit flex items-center">
                <span className="text-caption text-blue-400">
                  5% incremento
                </span>
              </div>
              {/* Lista de prospectos */}
              <ul className="space-y-2">
                {referidos.slice(0, 3).map((prospecto, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-caption">{i + 1}</span>
                      <span>{prospecto.nombre}</span>
                    </div>
                    <span className="text-caption text-blue-400">
                      {prospecto.interes}% interés
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </aside>
        {/* Main content */}
        <section className="w-2/3 flex flex-col gap-6">
          {/* Actividad reciente */}
          <section className="space-y-6">
            <p className="text-h3">Actividad reciente</p>
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Microempresarios referidos
              </p>
              <button className="bg-blue-300 text-blue-50 px-6 py-2 rounded-full text-action">
                Ver todos
              </button>
            </div>
            {/* Tabla */}
            <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-drop">
              <table className="min-w-full bg-white">
                <thead className="border-b border-blue-100">
                  <tr className="text-left text-gray-500 dark:text-gray-600">
                    <th className="p-4 text-body">Referido</th>
                    <th className="p-4 text-body">Negocio</th>
                    <th className="p-4 text-body">Reclutador</th>
                    <th className="p-4 text-body">Interés emprendedor</th>
                  </tr>
                </thead>
                <tbody>
                  {referidos.map((ref, i) => (
                    <tr key={i}>
                      <td className="p-4">{ref.nombre}</td>
                      <td className="p-4">{ref.negocio}</td>
                      <td className="p-4">{ref.reclutador}</td>
                      <td className="p-4">
                        <div className="px-4 py-1 rounded-md bg-blue-100 w-fit flex items-center">
                          <span className="text-caption text-blue-400">
                            {ref.interes}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Mapa de microempresas */}
          <section className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-h3">Microempresas</p>
              <button className="bg-blue-300 text-blue-50 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 7a1 1 0 011-1h7a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                  />
                </svg>
              </button>
            </div>
            {/* Imagen de mapa */}
            <img
              src="/img/map.png"
              alt="Mapa de microempresas"
              className="w-full h-96 rounded-2xl shadow-drop border border-blue-100 object-cover dark:hidden"
            />
            <img
              src="/img/map-dark.png"
              alt="Mapa de microempresas"
              className="w-full h-96 rounded-2xl shadow-drop border border-blue-100 object-cover dark:block"
            />
          </section>
        </section>
      </div>
    </main>
  );
}
